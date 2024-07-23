// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6ADO387t-1AHIHem9HkcFJ-X9JL5bXC8",
  authDomain: "xenon-shard-414307.firebaseapp.com",
  projectId: "xenon-shard-414307",
  storageBucket: "xenon-shard-414307.appspot.com",
  messagingSenderId: "768847239786",
  appId: "1:768847239786:web:8b051e89cf375de01c8813"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };