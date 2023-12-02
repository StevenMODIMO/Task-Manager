import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6UypRfn0v0IRdoHWlr5JIP4rvvmGVedk",
  authDomain: "react-firebase-18a3c.firebaseapp.com",
  projectId: "react-firebase-18a3c",
  storageBucket: "react-firebase-18a3c.appspot.com",
  messagingSenderId: "664523658595",
  appId: "1:664523658595:web:f262bff473600a0c39ef56",
  measurementId: "G-4N9993F9HY",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, firestore, auth };
