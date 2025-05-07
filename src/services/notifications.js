import * as Notifications from 'expo-notifications';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { auth } from '../firebase';

export async function registerPushToken() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') return;
  const tokenData = await Notifications.getExpoPushTokenAsync();
  const user = auth.currentUser;
  const db = getFirestore();
  await setDoc(
    doc(db, 'users', user.uid, 'fcmTokens', tokenData.data),
    { createdAt: new Date() }
  );
}
