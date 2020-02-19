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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //  only want this on sign in --> valid user obj
  if (!userAuth) return;
  //  get user ref at that location and then get snapshot to figure out if theres data in that location
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log(userRef);
  //  get the snapshot object
  const snapShot = await userRef.get();
  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // create user
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  console.log(transformedCollection);
};

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
