const jwt = require('../util/auth');

module.exports = async (req, res, next) => {
	try {
		const token = req.header('x-auth-token');
		req.jwtData = await jwt.verifyToken(token);
		next();
	} catch (err) {
		res.send('invalid token');
	}
};
