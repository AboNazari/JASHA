import firebase from "firebase/compat/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDTwlGxbpbExGZBYGnBzxhIgrJ9-co-3E",

  authDomain: "jasha-c559f.firebaseapp.com",

  databaseURL: "https://jasha-c559f-default-rtdb.firebaseio.com",

  projectId: "jasha-c559f",

  storageBucket: "jasha-c559f.appspot.com",

  messagingSenderId: "668549539907",

  appId: "1:668549539907:web:f41f3e8dc6027ce7fe0cf6",

  measurementId: "G-FQTZ9LEC04",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
