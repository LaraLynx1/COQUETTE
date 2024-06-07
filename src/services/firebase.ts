const firebase = require('firebase/app');
import 'firebase/firestore';
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { collection, addDoc, getDocs, updateDoc } = require('firebase/firestore');
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { publicacionform, publicacion, Coleccion } from '../types/publicacion';
import { doc, query, where } from 'firebase/firestore';

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

interface UserLogin {
	id: string;
	user: string;
	emailaddress: string;
	profile: string;
	authCredentials: string;
	firebaseID: string;
	uid: string;
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
	const usersArray: Array<UserLogin> = [];

	querySnapshot.forEach((doc: any) => {
		const data = doc.data() as UserLogin;
		usersArray.push({ ...data, uid: doc.id });
	});

	console.log('get', usersArray);
	return usersArray;
};

export const logOut = async () => {
	try {
		console.log('logOut');
		const verify = await signOut(auth);
		return true;
	} catch (error) {
		console.log('Error logOut', error);
		alert(error);
		return '';
	}
};

// REGISTRAR USUARIO

export const registrarUsuario = async (
	user: string,
	email: string,
	password: string,
	birthday: string,
	phone: string
) => {
	const allUsers = await getUsers();
	for (let index = 0; index < allUsers.length; index++) {
		if (email == allUsers[index].emailaddress) {
			alert('El email ya esta registrado');
			return;
		}
	}
	const credentials = await createUserWithEmailAndPassword(auth, email, password);
	const userCredentials = credentials.user.uid;
	try {
		const docRef = await addDoc(collection(db, 'usuarios'), {
			user: user,
			emailaddress: email,
			authCredentials: userCredentials,
			profile:
				'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg',
		});
		//console.log("Document written with ID: ", docRef.id);
		await updateDoc(docRef, {
			firebaseID: docRef.id,
		});

		return docRef.id;
	} catch (error) {
		const errorMessage = error;
		alert(errorMessage);
		return '';
	}
};

// LOGEAR USUARIO

export const login = async (username: string, password: string) => {
	const allUsers = await getUsers();
	/* for (let index = 0; index < allUsers.length; index++) {
		console.log('Datos', allUsers[index].emailaddress);

		if (username == allUsers[index].emailaddress) {
			alert('El usuario ya esta registrado');
			//return;
		}
	} */
	try {
		const credentials = await signInWithEmailAndPassword(auth, username, password);
		const userCredentials = credentials.user.uid;

		console.log('userCredentials', userCredentials);

		return userCredentials;
	} catch (error) {
		const errorMessage = error;
		console.log('Error', errorMessage);

		return '';
	}
};

export const addpublicacion = async (publicacion: publicacionform) => {
	try {
		const coleccion = collection(db, Coleccion.publicaciones);
		await addDoc(coleccion, publicacion);
		console.log('se añadió con éxito', publicacion);
	} catch (error) {
		console.error(error);
	}
};
export const getpublicaciones = async (): Promise<publicacion[]> => {
	const coleccion = collection(db, Coleccion.publicaciones);
	const querySnapshot = await getDocs(coleccion);
	//const querySnapshot = await getDocs(collection(db, Coleccion.PLAYLIST));
	const publicacionArray: Array<publicacion> = [];

	querySnapshot.forEach((doc: any) => {
		const payload: publicacionform = doc.data() as publicacionform;
		publicacionArray.push({ id: doc.id, ...payload });
	});

	return publicacionArray;
};

export const getpublicacionByUser = async (user: string): Promise<publicacion[]> => {
	let coleccion;
	try {
		coleccion = collection(db, Coleccion.publicaciones);
	} catch (error) {
		console.log('Datos error', error);
	}

	const condicion = query(coleccion, where('user', '==', user));

	const publicacionesByUser = await getDocs(condicion);

	if (publicacionesByUser.empty) {
		console.log('No existe ninguna publicación para este usuario');
		return [];
	}
	const publicacionArray: Array<publicacion> = [];

	publicacionesByUser.forEach((doc: any) => {
		const payload: publicacionform = doc.data() as publicacionform;
		publicacionArray.push({ id: doc.id, ...payload });
	});

	return publicacionArray;
};

export const sumarMegusta = async (publicacion: publicacion): Promise<void> => {
	try {
		const coleccion = collection(db, Coleccion.publicaciones);
		const documento = doc(coleccion, publicacion.id);
		await updateDoc(documento, publicacion);
		console.log('se actualizó con éxito', publicacion);
	} catch (error) {
		console.error(error);
	}
};
