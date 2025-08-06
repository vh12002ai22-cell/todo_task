// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA-ExampleKey123456789",
  authDomain: "my-app.firebaseapp.com",
  projectId: "my-app",
  storageBucket: "my-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123def456ghi789"
};
console.log("Firebase config loaded:", firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
