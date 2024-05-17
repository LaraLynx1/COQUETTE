// Importa las funciones necesarias de Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

// Configuración de Firebase de tu proyecto
const firebaseConfig = {
    apiKey: "AIzaSyANsoNo49zqX0WQ9mlb3yOFNAc31Lt-dKU",
    authDomain: "coquette-dcc06.firebaseapp.com",
    projectId: "coquette-dcc06",
    storageBucket: "coquette-dcc06.appspot.com",
    messagingSenderId: "656773814236",
    appId: "1:656773814236:web:29067ac07200e3368d6119",
    measurementId: "G-LZBKJP8VGN"
};

// Inicializa la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Ejemplo de cómo añadir un documento a una colección
const addData = async () => {
    try {
        const docRef = await addDoc(collection(db, "your-collection-name"), {
            field1: "value1",
            field2: "value2"
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

// Ejemplo de cómo obtener documentos de una colección
const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "your-collection-name"));
    querySnapshot.forEach((doc: any) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
};

// Llama a las funciones para agregar y obtener datos
addData();
getData();

