import { db, auth } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function createExchange(vehicleId) {
  const userId = auth.currentUser.uid;
  const exchangeRef = await addDoc(collection(db, 'exchanges'), {
    senderId: userId,
    vehicleId,
    status: 'pending',
    createdAt: serverTimestamp()
  });
  return exchangeRef.id;
}
