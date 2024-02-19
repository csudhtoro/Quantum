// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "quantum-dfec4.firebaseapp.com",
  projectId: "quantum-dfec4",
  storageBucket: "quantum-dfec4.appspot.com",
  messagingSenderId: "622019785268",
  appId: "1:622019785268:web:b72c6d6b3bdec895d21061"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
