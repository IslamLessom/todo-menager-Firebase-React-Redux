// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWS9UrJYlzooXx9T0iCVSzltjPUdK1XqU",
  authDomain: "busines-todo.firebaseapp.com",
  projectId: "busines-todo",
  storageBucket: "busines-todo.appspot.com",
  messagingSenderId: "660032652900",
  appId: "1:660032652900:web:922f8202c435e55b104171",
  measurementId: "G-LKXFC0LXN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Авторизация 
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
//База
export const db = getFirestore(app);
