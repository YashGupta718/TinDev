import firebase from 'firebase/compat';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB7dTHeGDJhMYdBAO5p85o8-8BUOl3CqPk",
    authDomain: "tinder-9c072.firebaseapp.com",
    projectId: "tinder-9c072",
    storageBucket: "tinder-9c072.appspot.com",
    messagingSenderId: "412768950624",
    appId: "1:412768950624:web:7a76ff92ec86389d806605"
  };
//databaseURL measurementId
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;