import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function uploadDocument(userId, type, url) {
  return await addDoc(collection(db, 'documents'), {
    userId,
    type,
    url,
    verified: false,
    uploadedAt: serverTimestamp()
  });
}
