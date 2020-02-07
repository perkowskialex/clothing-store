import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCkkj4-9nWHmjkcJZTj_1IPdjB15RXDqo0",
  authDomain: "clothing-store-3807b.firebaseapp.com",
  databaseURL: "https://clothing-store-3807b.firebaseio.com",
  projectId: "clothing-store-3807b",
  storageBucket: "clothing-store-3807b.appspot.com",
  messagingSenderId: "484772394465",
  appId: "1:484772394465:web:914b7f168c09fbf32d4ea0",
  measurementId: "G-35BWMR6W2V"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// set up google auth
const provider = new firebase.auth.GoogleAuthProvider();
// trigger google account pop up
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

// export firebase lib
export default firebase;
