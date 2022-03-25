// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDoc, getFirestore, updateDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//Manejar stock
export const updateStock = async (itemId, quantity) => {
  const item = await getDoc(doc(db, "bdProductos", itemId));
  await updateDoc(doc(db, "bdProductos", itemId), {
    stock: item.data().stock - quantity,
  });
}

