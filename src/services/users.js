import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';

export async function updateUserTrustScore(userId, score) {
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, { trustScore: score });
}
