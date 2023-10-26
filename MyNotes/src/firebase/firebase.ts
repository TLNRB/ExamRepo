import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMCVRTiqZWoTY2nvZnBd9NTdFd2GuA5aQ",
  authDomain: "mynotes-5eeeb.firebaseapp.com",
  projectId: "mynotes-5eeeb",
  storageBucket: "mynotes-5eeeb.appspot.com",
  messagingSenderId: "623199339485",
  appId: "1:623199339485:web:b459c812790fd6a25cac34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db: any = getFirestore(app);

export { db };
