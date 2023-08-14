// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5cvmffjAKiKCgu_E1Al6LJ1051wnIUHM",
  authDomain: "caja-dce66.firebaseapp.com",
  projectId: "caja-dce66",
  storageBucket: "caja-dce66.appspot.com",
  messagingSenderId: "663072383299",
  appId: "1:663072383299:web:c8f81c2549419fd3260ff6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)



