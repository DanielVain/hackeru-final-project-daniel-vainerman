import Joi from 'joi-browser';
import { toast } from 'react-toastify';
import { changePassword, getCurrentUser } from '../../services/userService';
import Form from '../common/Form/Form';
import PageHeader from '../common/pageHeader';
class ChangePassword extends Form {
	state = {
		data: {
			NewPassword: '',
			RepeatPassword: '',
		},
		errors: {},
	};

	user = getCurrentUser();

	schema = {
		NewPassword: Joi.string().required().min(8).label('NewPassword'),
		RepeatPassword: Joi.string().required().min(8).label('RepeatPassword'),
	};

	doSubmit = async () => {
		try {
			if (this.state.data.NewPassword === this.state.data.RepeatPassword) {
				await changePassword(this.state.data.NewPassword);
				toast.success('Password Changed Successfully!');
				setTimeout(() => {
					window.location = '/';
				}, 3000);
			}
		} catch (error) {
			if (error.response && error.response.status === 400)
				this.setState({
					errors: { email: 'Invalid password' },
				});
		}
	};

	render() {
		return (
			<div style={{ minHeight: '85vh' }} className="container-fluid">
				<div className="px-3">
					<PageHeader title="Change Password" subTitle="" />
					<div className="bg-primary p-2 m-2 shadow">
						<form
							onSubmit={this.handleSubmit}
							autoComplete="off"
							method="PUT"
							className="p-2 text-light"
						>
							{this.renderInput(
								'NewPassword',
								'New Password',
								'New Password',
								'password'
							)}
							{this.renderInput(
								'RepeatPassword',
								'Repeat Password',
								'Repeat Password',
								'password'
							)}
							{this.renderButton('Confirm')}
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default ChangePassword;
