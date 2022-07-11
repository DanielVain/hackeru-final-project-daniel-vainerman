import React from 'react';
import Form from './../common/Form/Form';
import Joi from 'joi-browser';
import PageHeader from './../common/pageHeader';
import { toast } from 'react-toastify';
import { getCurrentUser, login, signup } from '../../services/userService';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Signup extends Form {
	state = {
		data: {
			username: '',
			email: '',
			password: '',
		},
		errors: {},
	};

	schema = {
		username: Joi.string().required().min(2).label('Name'),
		email: Joi.string().required().email().label('Email'),
		password: Joi.string().required().min(8).max(30).label('Password'),
	};

	doSubmit = async () => {
		try {
			const user = { ...this.state.data };
			await signup(user);
			toast.success(`${user.username} you signed up successfully`);
			toast.success('You will be redirected in 3 seconds');
			delete user.username;
			await login(user);
			setTimeout(() => {
				window.location = '/';
			}, 3500);
		} catch (error) {
			if (error.response && error.response.status === 400)
				this.setState({
					errors: { email: error.response.data.details[0].message },
				});
		}
	};

	render() {
		const user = getCurrentUser();
		if (user) return <Navigate replace to="/" />;

		return (
			<div style={{ minHeight: '85vh' }} className="container-fluid">
				<div className="px-3">
					<PageHeader title="Register" subTitle="" />
					<div className="bg-primary p-2 m-2 shadow">
						<form
							onSubmit={this.handleSubmit}
							autoComplete="off"
							method="POST"
							className="p-2 text-light"
						>
							{this.renderInput('username', 'Username', 'Username')}
							{this.renderInput('email', 'Email', 'Email', 'email')}
							{this.renderInput('password', 'Password', 'Password', 'password')}
							{this.renderButton('Signup')}
						</form>
						<p className="d-flex justify-content-end mt-3 mb-0 text-white">
							Already Have An Account?&nbsp;
							<Link
								to="/login"
								style={{
									color: 'rgb(143, 169, 152)',
									textDecoration: 'none',
								}}
							>
								Login here
							</Link>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Signup;
