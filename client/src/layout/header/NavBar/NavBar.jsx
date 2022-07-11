import React from 'react';
import Logo from './Logo';
import BurgerButton from './BurgerButton';
import Navigation from './Navigation';
import { Container, Navbar } from 'react-bootstrap';

const NavBar = ({ user }) => (
	<Navbar bg="primary" expand="lg" variant="dark" className="shadow">
		<Container>
			<Logo />
			<BurgerButton />
			<Navigation user={user} />
		</Container>
	</Navbar>
);

export default NavBar;
