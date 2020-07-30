import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyClKoNYF2e-8Cf1r8lH6Y8Sj2N1m8wyOuU",
  authDomain: "reinstagram-24c50.firebaseapp.com",
  databaseURL: "https://reinstagram-24c50.firebaseio.com",
  projectId: "reinstagram-24c50",
  storageBucket: "reinstagram-24c50.appspot.com",
  messagingSenderId: "749570690533",
  appId: "1:749570690533:web:5eacbc4f9cb64f19a8330c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
