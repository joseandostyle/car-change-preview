import React from 'react';
import { View, Button } from 'react-native';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { getOrCreateConversation } from '../utils/chat';
import { useNavigation } from '@react-navigation/native';
import { createExchange } from '../services/exchanges'; // tu lógica de intercambios

export default function VehicleActions({ vehicle }) {
  const nav = useNavigation();
  const me = auth.currentUser.uid;

  const openChat = async () => {
    const convId = await getOrCreateConversation(vehicle.ownerId, vehicle.id);
    nav.navigate('ChatScreen', { conversationId: convId });
  };

  const requestExchange = async () => {
    const convId = await getOrCreateConversation(vehicle.ownerId, vehicle.id);
    // Mensaje inicial
    await addDoc(
      collection(db, `conversations/${convId}/messages`),
      {
        senderId: me,
        content: `Hola, me interesa intercambiar tu ${vehicle.brand} ${vehicle.model}.`,
        timestamp: serverTimestamp()
      }
    );
    // Crear solicitud de intercambio
    await createExchange(vehicle.id /*, demás parámetros */);
    nav.navigate('ChatScreen', { conversationId: convId });
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 16 }}>
      <Button title="🗨️ Chatear" onPress={openChat}/>
      <Button title="🔁 Solicitar intercambio" onPress={requestExchange}/>
    </View>
  );
}
