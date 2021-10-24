// import { initializeApp } from "firebase/app";
// import "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore/lite";

// const config = {
//   apiKey: "AIzaSyA20IumA144Ohnj5vuoB_HoLM6DlZYtPLk",
//   authDomain: "where-is-my-money-firebase.firebaseapp.com",
//   projectId: "where-is-my-money-firebase",
//   storageBucket: "where-is-my-money-firebase.appspot.com",
//   messagingSenderId: "175846970535",
//   appId: "1:175846970535:web:d3da3737f59fd1bd5fb782",
//   measurementId: "G-HP9DQY1ZZ6",
// };

// const app = initializeApp(config);
// const appWithFS = getFirestore(app);

// export default appWithFS;

// import * as firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// const config = {
//   apiKey: "AIzaSyA20IumA144Ohnj5vuoB_HoLM6DlZYtPLk",
//   authDomain: "where-is-my-money-firebase.firebaseapp.com",
//   projectId: "where-is-my-money-firebase",
//   storageBucket: "where-is-my-money-firebase.appspot.com",
//   messagingSenderId: "175846970535",
//   appId: "1:175846970535:web:d3da3737f59fd1bd5fb782",
//   measurementId: "G-HP9DQY1ZZ6",
// };

// firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

// export default firebase;

// Initialize Cloud Firestore through Firebase

// import * as firebase from "firebase";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyA20IumA144Ohnj5vuoB_HoLM6DlZYtPLk",
//   authDomain: "where-is-my-money-firebase.firebaseapp.com",
//   projectId: "where-is-my-money-firebase",
//   storageBucket: "where-is-my-money-firebase.appspot.com",
//   messagingSenderId: "175846970535",
//   appId: "1:175846970535:web:d3da3737f59fd1bd5fb782",
//   measurementId: "G-HP9DQY1ZZ6",
// };

// // const firebaseApp = initializeApp(firebaseConfig);
// // export default firebaseApp.firestore();

// export default !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig).firestore()
//   : firebase.app().firestore();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA20IumA144Ohnj5vuoB_HoLM6DlZYtPLk",
  authDomain: "where-is-my-money-firebase.firebaseapp.com",
  projectId: "where-is-my-money-firebase",
  storageBucket: "where-is-my-money-firebase.appspot.com",
  messagingSenderId: "175846970535",
  appId: "1:175846970535:web:d3da3737f59fd1bd5fb782",
  measurementId: "G-HP9DQY1ZZ6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
