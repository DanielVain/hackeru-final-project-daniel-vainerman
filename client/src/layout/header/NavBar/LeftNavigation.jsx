import React from 'react';
import NavRouteLink from '../../common/Navigation/NavRouteLink';
import { ROUTES } from '../../../model/routes';

const LeftNavigation = () => {
	return (
		<ul className="navbar-nav">
			<NavRouteLink route={ROUTES.ABOUT} />
			<NavRouteLink route={ROUTES.BROWSE} />
		</ul>
	);
};

export default LeftNavigation;
