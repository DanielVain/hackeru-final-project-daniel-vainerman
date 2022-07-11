import React from 'react';
import Form from './../common/Form/Form';
import Joi from 'joi-browser';
import PageHeader from './../common/pageHeader';
import { toast } from 'react-toastify';
import { getCurrentUser, login } from '../../services/userService';
import { Link, Navigate } from 'react-router-dom';

class Login extends Form {
	state = {
		data: {
			email: '',
			password: '',
		},
		errors: {},
	};

	schema = {
		email: Joi.string().required().email().label('Email'),
		password: Joi.string().required().min(8).label('Password'),
	};

	doSubmit = async () => {
		try {
			const user = { ...this.state.data };
			await login(user);
			toast.success('you logged successfully');
			toast.success('you will be redirected in 3 seconds');
			setTimeout(() => (window.location = '/'), 3500);
		} catch (error) {
			if (error.response && error.response.status === 400)
				this.setState({
					errors: { email: 'Invalid email or password' },
				});
		}
	};

	render() {
		const user = getCurrentUser();
		if (user) return <Navigate replace to="/" />;

		return (
			<div style={{ minHeight: '85vh' }} className="container-fluid">
				<div className="px-3">
					<PageHeader title="Login" subTitle="" />
					<div className="bg-primary p-2 m-2 shadow">
						<form
							onSubmit={this.handleSubmit}
							autoComplete="off"
							method="POST"
							className="p-2 text-light"
						>
							{this.renderInput('email', 'Email', 'Email', 'email')}
							{this.renderInput('password', 'Password', 'Password', 'password')}
							{this.renderButton('Login')}
						</form>
						<p className="d-flex justify-content-end mt-3 mb-0 text-white">
							Don't Have An Account?&nbsp;
							<Link
								to="/signup"
								style={{
									color: 'rgb(143, 169, 152)',
									textDecoration: 'none',
								}}
							>
								Register here
							</Link>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
