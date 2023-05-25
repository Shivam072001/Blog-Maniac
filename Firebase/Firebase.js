// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhOsRDd4b2IsVHGBBT1mA0eVLVlhzkw14",
  authDomain: "swagger-3360e.firebaseapp.com",
  databaseURL: "https://swagger-3360e-default-rtdb.firebaseio.com",
  projectId: "swagger-3360e",
  storageBucket: "swagger-3360e.appspot.com",
  messagingSenderId: "406549855548",
  appId: "1:406549855548:web:4f83ff49e1486786e8b239",
  measurementId: "G-PBB8RZ8LBS",
};
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Firebase
const db = getFirestore(app);

export { auth, provider, db };
