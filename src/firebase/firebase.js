// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDG92d-RaUVv72IhWMP-w1khc_dmmWJYSk',
  authDomain: 'ecom-sport-equipment.firebaseapp.com',
  projectId: 'ecom-sport-equipment',
  storageBucket: 'ecom-sport-equipment.appspot.com',
  messagingSenderId: '1051532307320',
  appId: '1:1051532307320:web:a391a8945050ef3f47b68d',
  measurementId: 'G-SSR9FFJMD1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 9098);
const auth = getAuth();
connectAuthEmulator(auth, 'http://localhost:9099');

export { db, auth };
