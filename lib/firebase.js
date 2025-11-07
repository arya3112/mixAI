// /lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔑 Replace these with your actual Firebase credentials
const firebaseConfig = {
  apiKey: "AIzaSyCPW71DI1x3r314booIhAw_tt3Ax0coXiU",
  authDomain: "ai-mix-855de.firebaseapp.com",
  databaseURL: "https://ai-mix-855de-default-rtdb.firebaseio.com",
  projectId: "ai-mix-855de",
  storageBucket: "ai-mix-855de.firebasestorage.app",
  messagingSenderId: "198819658235",
  appId: "1:198819658235:web:90839ac27fc03bd9b1335e",
  measurementId: "G-7Y2D14PLDZ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication and database
export const auth = getAuth(app);
export const db = getFirestore(app);
