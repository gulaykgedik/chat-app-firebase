// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//! auth importu
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//! database importu
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK6e8Lobx_KRdFhfNuml27BoM75QVt1_w",
  authDomain: "react-firebase-chat-c1d38.firebaseapp.com",
  projectId: "react-firebase-chat-c1d38",
  storageBucket: "react-firebase-chat-c1d38.firebasestorage.app",
  messagingSenderId: "120386404177",
  appId: "1:120386404177:web:0241084aab9f2a39f35d70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! authentication hizmetinin referansını al
export const auth = getAuth(app);

//! google sağlaycısının kurulumu
export const provider = new GoogleAuthProvider();

//! firestore (veritabanı) hizmetinin kurulumu
export const db = getFirestore(app);
