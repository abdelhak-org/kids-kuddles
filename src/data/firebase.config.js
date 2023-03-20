import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import  {getFirestore}  from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM-QgbJzCKfugZV_VOyLElzt92bbH5eFg",
  authDomain: "kidsblog-b11d7.firebaseapp.com",
  projectId: "kidsblog-b11d7",
  storageBucket: "kidsblog-b11d7.appspot.com",
  messagingSenderId: "179000511921",
  appId: "1:179000511921:web:de8bde36362b8933404190"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app)
