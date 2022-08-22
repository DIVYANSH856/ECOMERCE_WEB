import {initializeApp} from 'firebase/app' 
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from `firebase/auth`;

const firebaseConfig = {
    apiKey: "AIzaSyBJj5PIGjtpZ8zITM3hCDaUrG0N0JAK_2E",
    authDomain: "crwn-clothing-5f856.firebaseapp.com",
    projectId: "crwn-clothing-5f856",
    storageBucket: "crwn-clothing-5f856.appspot.com",
    messagingSenderId: "601881400311",
    appId: "1:601881400311:web:b55de368a8e1e805b554f2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () =>signInWithPopup(auth,provider);