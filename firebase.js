// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAxgGQrY1GhGHYPzeVnCnvQKJn_3aYqw44",
    authDomain: "twitter-clone-35db1.firebaseapp.com",
    projectId: "twitter-clone-35db1",
    storageBucket: "twitter-clone-35db1.appspot.com",
    messagingSenderId: "515094896948",
    appId: "1:515094896948:web:9a2dd51e7319bc1e0a8561",
    measurementId: "G-XD9CNGRQV7"
  };





  const firebaseApp=firebase.initializeApp(firebaseConfig)

const db=firebaseApp.firestore()

export default db;



