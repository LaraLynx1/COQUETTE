const firebase = require('firebase/app');
import 'firebase/firestore';
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { collection, addDoc, getDocs } = require('firebase/firestore');
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
export const db = getFirestore(app);

