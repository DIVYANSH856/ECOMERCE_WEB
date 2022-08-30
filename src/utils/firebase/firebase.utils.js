import {initializeApp} from 'firebase/app' 
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from  'firebase/auth';

import{
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBJj5PIGjtpZ8zITM3hCDaUrG0N0JAK_2E",
    authDomain: "crwn-clothing-5f856.firebaseapp.com",
    projectId: "crwn-clothing-5f856",
    storageBucket: "crwn-clothing-5f856.appspot.com",
    messagingSenderId: "601881400311",
    appId: "1:601881400311:web:b55de368a8e1e805b554f2"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  
  //provider parameters
  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth();
  //signinwithpopup 
  export const signInWithGooglePopup = () =>signInWithPopup(auth,provider);
  
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth,additionalInformation={})=>{
    if(!userAuth) return;
    
    const userDocRef = doc(db,'users',userAuth.uid);//db is database,users is document in db 
    const userSnapshot = await getDoc(userDocRef);
    //if user will get doc    
    if(!userSnapshot.exists()){ 
    const {displayName,email} = userAuth;
    const createdAt = new Date();
      try {
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
      } catch (error) {
        console.log("error creating the user", error.message);
      }
    }
    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);//creating users here
  };
  export const signInAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password);//creating users here
  };