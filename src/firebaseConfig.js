import firebase from "firebase";
import "firebase/firestore";

// import firebaseKeys from "./firebaseKeys";

// firebase init goes here
const config = {
    apiKey: "AIzaSyDKzVOULbKvuvzptVXO-Wt7vz5gvbtohXI",
    authDomain: "webproject-ef5ac.firebaseapp.com",
    databaseURL: "https://webproject-ef5ac.firebaseio.com",
    projectId: "webproject-ef5ac",
    storageBucket: "webproject-ef5ac.appspot.com",
    messagingSenderId: "823336720817",
    appId: "1:823336720817:web:cef9b067ab597054f64590"
  };
firebase.initializeApp(config);
const storage = firebase.storage();

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// firebase collections
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

export {
  db,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection,
  storage
};
