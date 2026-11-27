// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "eduquest-v2-f8b06.firebaseapp.com",
  projectId: "eduquest-v2-f8b06",
  storageBucket: "eduquest-v2-f8b06.firebasestorage.app",
  messagingSenderId: "488558905857",
  appId: "1:488558905857:web:374e8689380c920588ce00"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
