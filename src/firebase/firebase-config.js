import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAsL3jvwxBaCTglZEz4iozy80X05IMgwfM",
    authDomain: "react-apps-d35ba.firebaseapp.com",
    projectId: "react-apps-d35ba",
    storageBucket: "react-apps-d35ba.appspot.com",
    messagingSenderId: "587912543856",
    appId: "1:587912543856:web:927cee52df5b9024f6beb5"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }
