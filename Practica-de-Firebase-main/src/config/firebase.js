import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb9-GVPV-RXTaibYdPQf6HpoABG2FLQw4",
  authDomain: "practica-firebase-202203-df1b0.firebaseapp.com",
  projectId: "practica-firebase-202203-df1b0",
  storageBucket: "practica-firebase-202203-df1b0.appspot.com",
  messagingSenderId: "455511341992",
  appId: "1:455511341992:web:d86ca05ff4bbbf2e27fb9d"
};

console.log("Valor de configuracion", firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (app) {
  console.log('Firebase initialized successfully');
} else {
  console.log('Firebase initialization failed');
}

const database = getFirestore(app);
if (database) {
  console.log('Firestore initialized correctly');
} else {
  console.log('Firestore initialization failed');
}

const storage = getStorage(app);

if (storage) {
  console.log('storage initialized correctly');
} else {
  console.log('storage initialization failed');
}

export { database,storage };