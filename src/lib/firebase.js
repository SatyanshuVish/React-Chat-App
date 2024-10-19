import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-f4c6d.firebaseapp.com",
  projectId: "reactchat-f4c6d",
  storageBucket: "reactchat-f4c6d.appspot.com",
  messagingSenderId: "957338810826",
  appId: "1:957338810826:web:5caee7e5b9a060d15a7733"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();