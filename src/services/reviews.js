import { db, auth } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function submitReview(targetUserId, rating, comment) {
  const userId = auth.currentUser.uid;
  await addDoc(collection(db, 'reviews'), {
    from: userId,
    to: targetUserId,
    rating,
    comment,
    createdAt: serverTimestamp()
  });
}
