// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAivMikGknIsJb1DC700nYYoWYta7MChWE",
  authDomain: "tienda-comida-ralbert.firebaseapp.com",
  projectId: "tienda-comida-ralbert",
  storageBucket: "tienda-comida-ralbert.appspot.com",
  messagingSenderId: "189540271458",
  appId: "1:189540271458:web:819ff0a9e53e039f57d83b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)