import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCBQqfQNlsCskYMw-mqPo7wEpvbYU_y1Ws",
  authDomain: "carchange-preview.firebaseapp.com",
  projectId: "carchange-preview",
  storageBucket: "carchange-preview.firebasestorage.app",
  messagingSenderId: "534047708988",
  appId: "1:534047708988:web:c9b477f7a0e9475827b039",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
