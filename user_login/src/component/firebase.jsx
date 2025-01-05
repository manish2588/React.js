// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
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
export const auth=getAuth();
export const db=getFirestore(app)
export default app;
