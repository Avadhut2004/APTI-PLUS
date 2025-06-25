
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBIdA3bL3gIU4_63sSgi16ajTjtxv0ssmY",
  authDomain: "aptiplus-3ce68.firebaseapp.com",
  projectId: "aptiplus-3ce68",
  storageBucket: "aptiplus-3ce68.firebasestorage.app",
  messagingSenderId: "904444250876",
  appId: "1:904444250876:web:92d21b63d3eeea907ae579",
  measurementId: "G-ZV6ZH6E9BS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
