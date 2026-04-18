import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHeN0oc5K-1kra5RQx80MBP0SgQjmK-_E",
  authDomain: "reactlinks-4f8fc.firebaseapp.com",
  projectId: "reactlinks-4f8fc",
  storageBucket: "reactlinks-4f8fc.firebasestorage.app",
  messagingSenderId: "300485485703",
  appId: "1:300485485703:web:687e7119a365ded168c422"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };