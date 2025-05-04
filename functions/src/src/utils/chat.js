import { db, auth } from '../firebase';
import {
  collection, query, where,
  getDocs, addDoc, serverTimestamp
} from 'firebase/firestore';

export async function getOrCreateConversation(otherUid, vehicleId) {
  const me = auth.currentUser.uid;
  // Buscar conversación existente
  const convQ = query(
    collection(db, 'conversations'),
    where('participants', 'in', [[me, otherUid], [otherUid, me]]),
    where('vehicleId', '==', vehicleId)
  );
  const convSnap = await getDocs(convQ);
  if (!convSnap.empty) return convSnap.docs[0].id;
  // Crear nueva conversación
  const convRef = await addDoc(collection(db, 'conversations'), {
    participants: [me, otherUid],
    vehicleId,
    createdAt: serverTimestamp(),
    lastMessageAt: serverTimestamp()
  });
  return convRef.id;
}
