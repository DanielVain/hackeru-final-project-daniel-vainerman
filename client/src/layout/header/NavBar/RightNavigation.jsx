import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHeart,
	faMusic,
	faSquarePlus,
} from '@fortawesome/free-solid-svg-icons';
import { NavDropdown } from 'react-bootstrap';

const RightNavigation = ({ user }) => {
	return (
		<ul className="navbar-nav ms-auto align-items-center">
			{!user && (
				<>
					<Link to="/login">
						<button
							type="button"
							className="btn btn-success text-primary px-4 py-2"
						>
							Login
						</button>
					</Link>
				</>
			)}
			{user && (
				<div className="d-flex gap-2 align-items-center">
					<Link to="/favorite-songs">
						<FontAwesomeIcon
							icon={faHeart}
							className="text-success"
							size="2x"
							name="Add New Song"
						/>
					</Link>
					<Link to="/my-songs">
						<FontAwesomeIcon
							icon={faMusic}
							className="text-success mx-2"
							size="2x"
							name="Add New Song"
						/>
					</Link>
					<Link to="/add-new-song">
						<FontAwesomeIcon
							icon={faSquarePlus}
							className="text-success"
							size="3x"
							name="Add New Song"
						/>
					</Link>
					<Link to="/logout">
						<button
							type="button"
							className="btn btn-danger text-white px-4 py-2"
						>
							Logout
						</button>
					</Link>
					<NavDropdown title="" id="basic-nav-dropdown">
						<NavDropdown.Item as={Link} to="/change-password">
							Change Password
						</NavDropdown.Item>
					</NavDropdown>
				</div>
			)}
		</ul>
	);
};

export default RightNavigation;
