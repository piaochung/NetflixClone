import React from 'react';
import './App.css';
import MainPage from './page/MainPage';
import LoginPage from './page/LoginPage';
import LogoutPage from './page/LogoutPage';
import { HashRouter, Route, Router } from 'react-router-dom';
import Auth from './server/Auth';

function App() {
	return (
		<HashRouter>
			<Route exact path="/logout" component={Auth(LogoutPage, true)} />
			<Route exact path="/main" component={Auth(MainPage, true)} />
			<Route exact path="/" component={Auth(LoginPage, true)} />
		</HashRouter>
	);
}

export default App;
