const firebase = require('firebase/app');
import 'firebase/firestore';
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { collection, addDoc, getDocs } = require('firebase/firestore');
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { connecteduser } from '../types/store';

const firebaseConfig = {
    apiKey: "AIzaSyANsoNo49zqX0WQ9mlb3yOFNAc31Lt-dKU",
    authDomain: "coquette-dcc06.firebaseapp.com",
    projectId: "coquette-dcc06",
    storageBucket: "coquette-dcc06.appspot.com",
    messagingSenderId: "656773814236",
    appId: "1:656773814236:web:29067ac07200e3368d6119",
    measurementId: "G-LZBKJP8VGN"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const registrarUsuario = async (username: string, birthday: number, emailaddress: string, password: string) => {
    await createUserWithEmailAndPassword(auth, emailaddress, password)
      .then(async (userCredential:any) => {
        const userCredentials = userCredential.user.uid;
  
        console.log(userCredentials)
        const docRef = await addDoc(collection(db, "users"), {
            username: username,
            birthday: birthday,
            emailaddress: emailaddress,
            phone: PaymentMethodChangeEvent,
            authCredentials: userCredentials,
            profile: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
          });
          //console.log("Document written with ID: ", docRef.id);
          await updateDoc(docRef, {
            firebaseID: docRef.id
          });
    
          return docRef.id
        })
        .catch((error:any) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
          // ..
        });
    }

    export const iniciarSesion = async (email: string, password: string) => {
        let authUser: any = ""
      
      
        await signInWithEmailAndPassword(auth, email, password)
          .then((userCredential: any) => {
            // Signed in
            authUser = userCredential.user;
            console.log(authUser)
            dispatch(
              connecteduser(authUser)
            )
            appState.user = authUser
            console.log(appState)
          })
          .catch((error:any) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      
      
      }