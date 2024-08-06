import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Paste your firebase details below:
const firebaseConfig = {
  apiKey: "AIzaSyBwy_86kUDwVAoORYjHp7IAm6gUrJAjH2U",
  authDomain: "clone-app-f9b21.firebaseapp.com",
  projectId: "clone-app-f9b21",
  storageBucket: "clone-app-f9b21.appspot.com",
  messagingSenderId: "427833382987",
  appId: "1:427833382987:web:57f7a2e9bf9a3aeed295ce"
};


  // No need to change anything below this line
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;