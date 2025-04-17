import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA4-QzlAzl7SkF6VuZeJHlIjEkXTNf7q1I",
    authDomain: "login-a1ddb.firebaseapp.com",
    projectId: "login-a1ddb",
    storageBucket: "login-a1ddb.firebasestorage.app",
    messagingSenderId: "493797264274",
    appId: "1:493797264274:web:7125635a9ef73210638f4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign-Up Function
export const signUp = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Sign-In Function
export const signIn = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};