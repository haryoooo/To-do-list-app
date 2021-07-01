import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAvkZI_PeahnBhzPRvNFHYDMrhPhJvZHow",
  authDomain: "react-todolist-79e6a.firebaseapp.com",
  databaseURL: "https://react-todolist-79e6a-default-rtdb.firebaseio.com",
  projectId: "react-todolist-79e6a",
  storageBucket: "react-todolist-79e6a.appspot.com",
  messagingSenderId: "364306915194",
  appId: "1:364306915194:web:ac15d6c67f4ab9be2400c3",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
