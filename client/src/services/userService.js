import axios from './httpService';
import JWTDecode from 'jwt-decode';
const apiUrl = process.env.REACT_APP_API_URL;

export const signup = user => axios.post(`${apiUrl}/users/register`, user);

export const login = async user => {
	const {
		data: { token },
	} = await axios.post(`${apiUrl}/users/login`, user);
	localStorage.setItem('token', token);
};

export const getSpecificUser = userId =>
	axios.get(`${apiUrl}/users/find/${userId}`);

export const getCurrentUser = () => {
	try {
		const token = localStorage.getItem('token');
		return JWTDecode(token);
	} catch {
		return null;
	}
};

export const logout = () => {
	localStorage.removeItem('token');
	return (window.location = '/');
};

export const getJWT = () => localStorage.getItem('token');

export const changePassword = password =>
	axios.put(`${apiUrl}/users/change-password/${password}`);
