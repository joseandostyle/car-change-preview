import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

export default function ChatListScreen() {
  const nav = useNavigation();
  const me = auth.currentUser.uid;
  const [convs, setConvs] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'conversations'),
      where('participants', 'array-contains', me)
    );
    const unsub = onSnapshot(q, snap => {
      setConvs(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, []);

  return (
    <FlatList
      data={convs}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => nav.navigate('ChatScreen', { conversationId: item.id })}
        >
          <View style={{ padding: 16, borderBottomWidth: 1, borderColor: '#eee' }}>
            <Text style={{ fontWeight: 'bold' }}>
              Chat con {item.participants.find(u => u !== me)}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
