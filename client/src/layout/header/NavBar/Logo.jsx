import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const Logo = () => (
	<Navbar.Brand as={NavLink} to="/">
		<img
			src={process.env.PUBLIC_URL + '/images/Headliner.png'}
			alt="logo"
			width="187"
			height="44"
		/>
	</Navbar.Brand>
);

export default Logo;
