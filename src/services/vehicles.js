import { db, auth } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function addVehicle(data) {
  const userId = auth.currentUser.uid;
  return await addDoc(collection(db, 'vehicles'), {
    ...data,
    ownerId: userId,
    createdAt: serverTimestamp()
  });
}
