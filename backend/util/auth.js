const jwt = require('jsonwebtoken');
const config = require('config');

const generateToken = user => {
	const token = jwt.sign(user, config.get('jwtKey'), { expiresIn: '4h' });
	return token;
};

const verifyToken = token => {
	try {
		const user_data = jwt.verify(token, config.get('jwtKey'));
		return user_data;
	} catch (error) {
		return null;
	}
};

module.exports = {
	generateToken,
	verifyToken,
};
