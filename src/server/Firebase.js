import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDBm5On_u3LYmDLC-2BTEKOiw0YFeIDO28',
	authDomain: 'blogexample-ea8a0.firebaseapp.com',
	databaseURL: 'https://blogexample-ea8a0.firebaseio.com',
	projectId: 'blogexample-ea8a0',
	storageBucket: 'blogexample-ea8a0.appspot.com',
	messagingSenderId: '450591361240',
	appId: '1:450591361240:web:6c5c060047ddac8fa8afad',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;

export const SighInWithGoogle = () => {
	provider.setCustomParameters({ prompt: 'select_account' });
	auth.signInWithPopup(provider);
};

export const SignOutWithGoogle = () => {
	firebase
		.auth()
		.signOut()
		.catch(function (error) {
			console.log(error);
		});
};
