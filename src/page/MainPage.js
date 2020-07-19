import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import TrendContainer from '../container/TrendContainer';
import ActionContainer from '../container/ActionContainer';
import TopRatedContainer from '../container/TopRatedContainer';
import ComedyContainer from '../container/ComedyContainer';
import HorrorContainer from '../container/HorrorContainer';
import RomanceContainer from '../container/RomanceContainer';

const MainPage = () => {
	return (
		<div>
			<Nav />
			<Header />
			<TopRatedContainer />
			<ComedyContainer />
			<HorrorContainer />
			<RomanceContainer />
			<ActionContainer />
			<TrendContainer />
		</div>
	);
};

export default MainPage;
