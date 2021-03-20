import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBIa3AaNpyPaxdo8bwM69U84LsgF3UpEdQ",
  authDomain: "facebook-messenger-clone-cef89.firebaseapp.com",
  projectId: "facebook-messenger-clone-cef89",
  storageBucket: "facebook-messenger-clone-cef89.appspot.com",
  messagingSenderId: "550980183699",
  appId: "1:550980183699:web:10e8b3114eec2d4e4a0f66",
  measurementId: "G-75XMV2BJFV"
});

const db = firebaseApp.firestore();

export default db;
 