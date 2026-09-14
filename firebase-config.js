const firebaseConfig = {
  apiKey: "AIzaSyDMVbDCxFJo5_J0wMoiNb4AVrZCiV4GFGc",
  authDomain: "para-ver-ce1b9.firebaseapp.com",
  databaseURL: "https://para-ver-ce1b9-default-rtdb.firebaseio.com",
  projectId: "para-ver-ce1b9",
  storageBucket: "para-ver-ce1b9.firebasestorage.app",
  messagingSenderId: "101656425888",
  appId: "1:101656425888:web:1fd31b060bbf21f6a3a0c5",
  measurementId: "G-3GJDE3H6L8"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
const ROOT = "ecos";

/* Las fotos de los posts NO usan Firebase Storage (evita el plan Blaze).
   Se comprimen en el navegador y se guardan como base64 directo en
   Realtime Database, en el campo posts/$postId/imageUrl. */
