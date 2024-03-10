
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';





// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkoNenDhvgvtGXgHQZ9B9F_eMdadbGMEM",
    authDomain: "experiments-rn.firebaseapp.com",
    projectId: "experiments-rn",
    storageBucket: "experiments-rn.appspot.com",
    messagingSenderId: "455831897825",
    appId: "1:455831897825:web:76982c4bb208e68e9719a0",
    measurementId: "G-12NL0W3EQP"
  };

  //init firebase

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

  
    