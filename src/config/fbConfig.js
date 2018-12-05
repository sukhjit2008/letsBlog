import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBd7HF1AvE7J9eQcCTIf_ZPdhtDdTpATWE",
  authDomain: "letsblog-9a00e.firebaseapp.com",
  databaseURL: "https://letsblog-9a00e.firebaseio.com",
  projectId: "letsblog-9a00e",
  storageBucket: "letsblog-9a00e.appspot.com",
  messagingSenderId: "941044494142"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 