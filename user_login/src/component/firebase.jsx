// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";  // Make sure to import GoogleAuthProvider
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNd074Hw0hSVjzZZ0t6GEUTyYKQ7u-Uzk",
  authDomain: "auth-7ab90.firebaseapp.com",
  projectId: "auth-7ab90",
  storageBucket: "auth-7ab90.firebasestorage.app",
  messagingSenderId: "544063412857",
  appId: "1:544063412857:web:afc07bec134414b83752a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
export const auth = getAuth();
export const db = getFirestore(app);

// Create a GoogleAuthProvider instance
export const googleProvider = new GoogleAuthProvider();

export default app;
