const ROUTES = {
	ROOT: 'ROOT',
	ABOUT: 'ABOUT',
	LOGOUT: 'LOGOUT',
	BROWSE: 'BROWSE',
	LOGIN: 'LOGIN',
	SIGNUP: 'SIGNUP',
};

const ROUTES_DEF = {
	[ROUTES.ROOT]: { to: '/', label: 'Home' },
	[ROUTES.ABOUT]: { to: '/about', label: 'About' },
	[ROUTES.BROWSE]: { to: '/browse', label: 'Browse' },
	[ROUTES.LOGOUT]: { to: '/logout', label: 'Logout' },
	[ROUTES.LOGIN]: { to: '/login', label: 'Login' },
	[ROUTES.SIGNUP]: { to: '/signup', label: 'Signup' },
};

export { ROUTES_DEF, ROUTES };
