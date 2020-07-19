import React from 'react';
import NetflixLogo from '../drawable/Netflix_Logo.png';
import { SignOutWithGoogle } from '../server/Firebase';

const Nav = () => {
	return (
		<div>
			<ul style={{ display: 'flex' }}>
				<ll>
					<img style={{ width: '250px' }} src={NetflixLogo} alt="NetflixLogo" />
				</ll>
				<li style={{ marginRight: '30px' }}>
					<div>Home</div>
				</li>
				<li style={{ marginRight: '30px' }}>
					<div>TV Shows</div>
				</li>
				<li style={{ marginRight: '30px' }}>
					<div>Movies</div>
				</li>
				<li style={{ marginRight: '30px' }}>
					<div>Recently</div>
				</li>
				<li style={{ marginRight: '30px' }}>
					<div>My List</div>
				</li>
				<li style={{ marginRight: '30px' }}>
					<button onClick={SignOutWithGoogle}>Sign Out</button>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
