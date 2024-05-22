import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Paste your firebase details below:
const firebaseConfig = {
  apiKey: "AIzaSyDJtT6PCrIVJk6H12QjfbN59JCD6NbAJMM",
  authDomain: "clone-app-4057f.firebaseapp.com",
  projectId: "clone-app-4057f",
  storageBucket: "clone-app-4057f.appspot.com",
  messagingSenderId: "327659153305",
  appId: "1:327659153305:web:4ab942afd0012b45e79508"
};


  // No need to change anything below this line
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;