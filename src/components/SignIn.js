import React, { useState, useEffect } from 'react';
import { SighInWithGoogle, SignOutWithGoogle } from '../server/Firebase';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const SignIn = () => {
	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');

	const OnEmailListener = (event) => {
		setEmail(event.currentTarget.value);
		console.log(Email);
	};

	const OnPasswordListener = (event) => {
		setPassword(event.currentTarget.value);
		console.log(Password);
	};

	const OnSubmitListener = (event) => {
		event.preventDefault();

		console.log('Submit!');
	};

	return (
		<div>
			<button onClick={SighInWithGoogle}>Sign In With Google</button>
			<button onClick={SignOutWithGoogle}>Sign Out With Google</button>
			<form onSubmit={OnSubmitListener}>
				<label>Email: </label>
				<input type="email" value={Email} onChange={OnEmailListener} />
				<br />
				<label>Password: </label>
				<input type="password" value={Password} maxLength={20} onChange={OnPasswordListener} />
				<br />
			</form>
		</div>
	);
};

export default SignIn;
