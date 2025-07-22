import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD...your real key...",
  authDomain: "feelcaribe.firebaseapp.com",
  projectId: "feelcaribe",
  storageBucket: "feelcaribe.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef12345678",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);