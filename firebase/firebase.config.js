import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAWpys44D4YYNjKC7xAVbtVDZFN97VQ6d4",
  authDomain: "loginwithfirebase-42534.firebaseapp.com",
  projectId: "loginwithfirebase-42534",
  storageBucket: "loginwithfirebase-42534.appspot.com",
  messagingSenderId: "787191894105",
  appId: "1:787191894105:web:3f89c24be495eda2342148"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);