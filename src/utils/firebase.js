import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAo6g_KF_dWSI3ujHXXBD7fn1TZ_xKvI28",
  authDomain: "flexbook-fd98b.firebaseapp.com",
  projectId: "flexbook-fd98b",
  storageBucket: "flexbook-fd98b.appspot.com",
  messagingSenderId: "596096847573",
  appId: "1:596096847573:web:01b6a727e2c1c12aa9dc5c",
  measurementId: "G-YPXVSYRLSX"
};


const firebaseApp =firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth, provider};
export default db;       