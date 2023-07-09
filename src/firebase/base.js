// import * as firebase from "firebase/app";
// import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbVOUkvt2jlX30FzAebbO5XL8N6KuLbOg",
  authDomain: "sentiment-743cd.firebaseapp.com",
  projectId: "sentiment-743cd",
  storageBucket: "sentiment-743cd.appspot.com",
  messagingSenderId: "328602407585",
  appId: "1:328602407585:web:712f1e48165feb681a96e0",
};
// const firebaseConfig ={
//   apiKey: process.env.REACT_FIREBASE_KEY,
//   authDomain: process.env.REACT_FIREBASE_DOMAIN,
//   projectId: process.env.REACT_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_FIREBASE_API_KEY,
// };

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialze firebase auth and get reference to the service
export const auth = getAuth(app);

export default app;
