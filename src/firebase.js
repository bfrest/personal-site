import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAwiV_YQxJJNtRP3BZQGDAgxMnDIuauVQY",
  authDomain: "blog-93bf1.firebaseapp.com",
  databaseURL: "https://blog-93bf1.firebaseio.com",
  projectId: "blog-93bf1",
  storageBucket: "blog-93bf1.appspot.com",
  messagingSenderId: "54863989237"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
