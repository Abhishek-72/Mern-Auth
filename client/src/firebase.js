// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-auth-8e729.firebaseapp.com",
  projectId: "mern-auth-8e729",
  storageBucket: "mern-auth-8e729.appspot.com",
  messagingSenderId: "929595761267",
  appId: "1:929595761267:web:f0d5b30148626cff048006"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);