// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyD3uCxkmRr0tbHpzZlHyuv4LpPVveIqRyc",
    authDomain: "it35-balsa.firebaseapp.com",
    projectId: "it35-balsa",
    storageBucket: "it35-balsa.appspot.com",
    messagingSenderId: "172811464159",
    appId: "1:172811464159:web:cb3e176e501bcf4d15286a",
    measurementId: "G-RFK9KRNLGE"
  };


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}