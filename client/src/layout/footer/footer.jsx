import { Link } from 'react-router-dom';
import { getCurrentUser } from '../../services/userService';

const Footer = () => {
	const user = getCurrentUser();

	return (
		<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-primary">
			<p className="col-md-4 mb-0 text-muted px-2">Daniel Vainerman © 2021</p>

			<Link
				to="/"
				className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
			>
				<img
					src={process.env.PUBLIC_URL + '/images/Headliner.png'}
					alt="Headliner logo"
				/>
			</Link>

			<ul className="nav col-md-4 d-flex justify-content-lg-end justify-content-center px-2">
				<li className="nav-item">
					<Link to="/" className="nav-link px-2 text-muted">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about" className="nav-link px-2 text-muted">
						About
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/browse" className="nav-link px-2 text-muted">
						Browse
					</Link>
				</li>
				{!user && (
					<li className="nav-item">
						<Link to="/login" className="nav-link px-2 text-muted">
							Login
						</Link>
					</li>
				)}
			</ul>
		</footer>
	);
};

export default Footer;
