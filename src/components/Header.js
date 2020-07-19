import React from 'react';
import backgroundImage from '../drawable/header.jpg';

const Header = () => {
	return (
		<header>
			<div>
				<img src={backgroundImage} alt="stranger" />
				<div style={{}}>
					<h1>STRANGER THINGS</h1>
					<p>
						When a young boy vanishes, a small town uncovers a mystery involving secret experiments,
						terrifying supernatural forces, and one strange little girl.
					</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
