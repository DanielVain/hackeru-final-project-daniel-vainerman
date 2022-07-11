import React from 'react';
import { Navbar } from 'react-bootstrap';
import LeftNavigation from './LeftNavigation';
import RightNavigation from './RightNavigation';

const Navigation = ({ user }) => (
	<Navbar.Collapse id="basic-navbar-nav">
		<LeftNavigation />
		<RightNavigation user={user} />
	</Navbar.Collapse>
);

export default Navigation;
