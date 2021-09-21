import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6weYaxA2JBMUtremcXJigIP-W-walniU",
  authDomain: "clone-next-936a4.firebaseapp.com",
  projectId: "clone-next-936a4",
  storageBucket: "clone-next-936a4.appspot.com",
  messagingSenderId: "1010845912618",
  appId: "1:1010845912618:web:16f5c4176a3b90eb7bbd53",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
