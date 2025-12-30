import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0J6wazi0i81I13zme84NdFCXQMN9kfYc",
  authDomain: "projectmanagement-2bc32.firebaseapp.com",
  projectId: "projectmanagement-2bc32",
  storageBucket: "projectmanagement-2bc32.firebasestorage.app",
  messagingSenderId: "1068929262700",
  appId: "1:1068929262700:web:fe2fca7f04e8aec43ba449",
  measurementId: "G-FFKLDMPF2W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();