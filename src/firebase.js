import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDS4hO-7gTa1S3LQnJXOcIA-TgR2fTWCy4",
  authDomain: "supermarket-24695.firebaseapp.com",
  projectId: "supermarket-24695",
  storageBucket: "supermarket-24695.appspot.com",
  messagingSenderId: "915192332263",
  appId: "1:915192332263:web:4ff0cd4c8b046d229d4742"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };