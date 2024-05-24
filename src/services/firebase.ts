const firebase = require('firebase/app');
import 'firebase/firestore';
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { collection, addDoc, getDocs, updateDoc } = require('firebase/firestore');
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyANsoNo49zqX0WQ9mlb3yOFNAc31Lt-dKU',
	authDomain: 'coquette-dcc06.firebaseapp.com',
	projectId: 'coquette-dcc06',
	storageBucket: 'coquette-dcc06.appspot.com',
	messagingSenderId: '656773814236',
	appId: '1:656773814236:web:29067ac07200e3368d6119',
	measurementId: 'G-LZBKJP8VGN',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

interface User {
	uid: string;
	username: string;
	email: string;
	birthday: string;
	phone: string;
}

export const addUser = async (userData: Omit<User, 'uid'>) => {
	console.log('form', userData);
	try {
		const docRef = await addDoc(collection(db, 'usuarios'), userData);
		console.log('Document written with ID: ', docRef.id);
		return docRef.id;
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const getUsers = async () => {
	const querySnapshot = await getDocs(collection(db, 'usuarios'));
	const usersArray: Array<User> = [];

	querySnapshot.forEach((doc: any) => {
		const data = doc.data() as User;
		usersArray.push({ ...data, uid: doc.id });
	});

	console.log('get', usersArray);
	return usersArray;
};

// const getData = async () => {
//     const querySnapshot = await getDocs(collection(db, "your-collection-name"));
//     querySnapshot.forEach((doc: any) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// };

// getData();

export const registrarUsuario = async (user: string, age: number, emailaddress: string, password: string) => {
	await createUserWithEmailAndPassword(auth, emailaddress, password)
		.then(async (userCredential) => {
			// Signed up
			const userCredentials = userCredential.user.uid;

			console.log(userCredentials);

			const docRef = await addDoc(collection(db, 'usuarios'), {
				user: user,
				age: age,
				emailaddress: emailaddress,
				authCredentials: userCredentials,
				profile:
					'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg',
			});
			//console.log("Document written with ID: ", docRef.id);
			await updateDoc(docRef, {
				firebaseID: docRef.id,
			});

			return docRef.id;
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			alert(errorMessage);
			// ..
		});
};
