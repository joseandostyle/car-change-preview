import React, { useEffect, useState } from 'react';
import {
  View, FlatList, TextInput,
  Button, Image, Text, StyleSheet
} from 'react-native';
import {
  collection, query, orderBy,
  onSnapshot, addDoc, serverTimestamp
} from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker';
import { db, auth, storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function ChatScreen({ route }) {
  const { conversationId } = route.params;
  const me = auth.currentUser.uid;
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const q = query(
      collection(db, `conversations/${conversationId}/messages`),
      orderBy('timestamp', 'desc')
    );
    const unsub = onSnapshot(q, snap =>
      setMessages(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    );
    return unsub;
  }, [conversationId]);

  const sendMessage = async () => {
    if (!text) return;
    await addDoc(
      collection(db, `conversations/${conversationId}/messages`),
      {
        senderId: me,
        content: text,
        timestamp: serverTimestamp()
      }
    );
    setText('');
  };

  const attachImage = async () => {
    const { assets } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
    if (!assets?.length) return;
    const { uri } = assets[0];
    const response = await fetch(uri);
    const blob = await response.blob();
    const fileRef = ref(storage, `chats/${conversationId}/${Date.now()}`);
    await uploadBytes(fileRef, blob);
    const url = await getDownloadURL(fileRef);
    await addDoc(
      collection(db, `conversations/${conversationId}/messages`),
      {
        senderId: me,
        attachments: [url],
        timestamp: serverTimestamp()
      }
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        inverted
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.bubble,
              item.senderId === me ? styles.mine : styles.theirs
            ]}
          >
            {item.content ? <Text>{item.content}</Text> : null}
            {item.attachments?.map(url => (
              <Image
                key={url}
                source={{ uri: url }}
                style={styles.image}
              />
            ))}
            <Text style={styles.timestamp}>
              {item.timestamp?.toDate().toLocaleTimeString()}
            </Text>
          </View>
        )}
      />
      <View style={styles.inputBar}>
        <Button title="📎" onPress={attachImage}/>
        <TextInput
          style={styles.input}
          placeholder="Escribe un mensaje…"
          value={text}
          onChangeText={setText}
        />
        <Button title="➤" onPress={sendMessage}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  bubble: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    maxWidth: '80%'
  },
  mine: {
    backgroundColor: '#DCF8C5',
    alignSelf: 'flex-end'
  },
  theirs: {
    backgroundColor: '#FFF',
    alignSelf: 'flex-start'
  },
  timestamp: {
    fontSize: 10,
    color: '#888',
    alignSelf: 'flex-end'
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 4,
    borderRadius: 8
  },
  inputBar: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 8,
    padding: 8
  }
});
