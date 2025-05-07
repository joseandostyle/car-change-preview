import { db, auth } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function submitInsuranceDocument(data) {
  const userId = auth.currentUser.uid;
  return await addDoc(collection(db, 'insurance'), {
    ...data,
    submittedBy: userId,
    submittedAt: serverTimestamp(),
    status: 'pending'
  });
}
