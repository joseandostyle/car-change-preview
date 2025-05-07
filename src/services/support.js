import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function reportIssue(userId, type, description) {
  return await addDoc(collection(db, 'reports'), {
    userId,
    type,
    description,
    status: 'open',
    createdAt: serverTimestamp()
  });
}
