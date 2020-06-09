import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDYIdFDQ3ccmgUHsEJC7EQuPGyX3U0BKoM",
  authDomain: "reactemoji.firebaseapp.com",
  databaseURL: "https://reactemoji.firebaseio.com",
  projectId: "reactemoji",
  storageBucket: "reactemoji.appspot.com",
  messagingSenderId: "720480809303",
  appId: "1:720480809303:web:f15ebfbabc020e77a9ce12",
  measurementId: "G-2JR26EL0W1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.database();
export const firestore = firebase.firestore();
export const key = "Liars_Dice";
export default firestore;
