
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// other services is needed

const firebaseConfig = {
    apiKey: "AIzaSyCKCB--Za3kwkmZz8jdLGLm0lggPVckL00",
    authDomain: "clone-42d73.firebaseapp.com",
    projectId: "clone-42d73",
    storageBucket: "clone-42d73.appspot.com",
    messagingSenderId: "473342586085",
    appId: "1:473342586085:web:ca83bf801479951cf8f80c"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};