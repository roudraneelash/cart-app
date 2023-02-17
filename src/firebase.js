import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCs6UXDvuuq54SbeCAqn3qcmCUtt16sycg",
  authDomain: "cart-b6031.firebaseapp.com",
  projectId: "cart-b6031",
  storageBucket: "cart-b6031.appspot.com",
  messagingSenderId: "327665465402",
  appId: "1:327665465402:web:e69401506833cebe851d03",
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
