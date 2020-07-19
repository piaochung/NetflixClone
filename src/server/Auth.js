import React, { useEffect } from 'react';
import firebase from 'firebase/app';

export default function (SpecificComponent, option, adminRoute = null) {
	function AuthenticationCheck(props) {
		useEffect(() => {
			firebase.auth().onAuthStateChanged(function (user) {
				if (user) {
					props.history.push('/main');
				} else {
					props.history.push('/');
				}
			});
		}, []);

		return <SpecificComponent />;
	}
	return AuthenticationCheck;
}
