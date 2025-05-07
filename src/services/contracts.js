import { db, auth } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function saveContract(data) {
  const userId = auth.currentUser.uid;
  return await addDoc(collection(db, 'contracts'), {
    ...data,
    createdBy: userId,
    createdAt: serverTimestamp()
  });
}
