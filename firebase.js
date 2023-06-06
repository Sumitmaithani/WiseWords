// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5U4ak-inDowuab2kR7F0uTDNjXvFEhtY",
  authDomain: "wisewords-cb1ee.firebaseapp.com",
  projectId: "wisewords-cb1ee",
  storageBucket: "wisewords-cb1ee.appspot.com",
  messagingSenderId: "73766041748",
  appId: "1:73766041748:web:179dc765fcd74bbc8c9c81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }