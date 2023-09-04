import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Paste your firebase details below:
const firebaseConfig = {
  apiKey: "AIzaSyBcEkZ8UpkEg7h_iNQy4PRTF0jzaxdS_UI",
  authDomain: "linkedin-clone-9bb89.firebaseapp.com",
  projectId: "linkedin-clone-9bb89",
  storageBucket: "linkedin-clone-9bb89.appspot.com",
  messagingSenderId: "22255380939",
  appId: "1:22255380939:web:587992d2e20ee77c812e4e"
};


  // No need to change anything below this line
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;