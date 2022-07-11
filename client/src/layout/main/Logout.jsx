import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { logout } from '../../services/userService';

const Logout = () => {
	const navigate = useNavigate();
	Swal.fire({
		title: 'Are you sure you want to logout?',
		showCancelButton: true,
		confirmButtonText: 'Proceed To Logout',
		confirmButtonColor: '#dc3545',
	}).then(result => {
		if (result.isConfirmed) {
			return logout();
		} else {
			navigate(-1);
		}
	});
	return null;
};

export default Logout;
