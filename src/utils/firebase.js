// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6y41TwiQcoMiSPdAxFtTYZUS2hEOwf2c",
  authDomain: "bd-shop-ff681.firebaseapp.com",
  projectId: "bd-shop-ff681",
  storageBucket: "bd-shop-ff681.appspot.com",
  messagingSenderId: "556808558793",
  appId: "1:556808558793:web:4b85dacea9304ed9f3d518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


