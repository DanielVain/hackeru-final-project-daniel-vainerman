import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = ({ user }) => {
	return (
		<div className="container col-xxl-8 px-4 py-5">
			<div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
				<div className="col-10 col-sm-8 col-lg-6 ">
					<img
						src={process.env.PUBLIC_URL + '/images/Albums.png'}
						className="img-fluid"
						alt="Albums"
						loading="lazy"
						width="619"
						height="301"
					/>
				</div>
				<div className="col-lg-6 lh-0">
					<img
						className="img-fluid"
						src={process.env.PUBLIC_URL + '/images/Title.png'}
						alt="Title"
						loading="lazy"
						width={615}
						style={{ maxWidth: '615' }}
					/>
					<div className="d-flex justify-content-evenly ">
						<Link to="/browse">
							<button
								type="button"
								className="btn btn-primary btn-lg px-4 me-md-2"
							>
								Browse
							</button>
						</Link>
						{!user && (
							<Link to="/login">
								<button
									type="button"
									className="btn btn-success text-primary btn-lg px-4"
								>
									Login
								</button>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
