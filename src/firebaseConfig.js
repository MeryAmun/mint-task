// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUS6m3Z9_wZyL904VIiwwFDiaBTtfIfc8",
  authDomain: "mint-d4711.firebaseapp.com",
  projectId: "mint-d4711",
  storageBucket: "mint-d4711.appspot.com",
  messagingSenderId: "22402925171",
  appId: "1:22402925171:web:9a502b950de5c35ea92006",
  measurementId: "G-HR0ER98XKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };