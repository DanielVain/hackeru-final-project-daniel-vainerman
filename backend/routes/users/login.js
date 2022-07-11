const express = require('express');
const router = express.Router();
const userValidation = require('../../validation/usersValidation');
const bcrypt = require('../../util/bcrypt');
const userModel = require('../../model/userModel');
const jwt = require('../../util/auth');

//* login
router.post('/', async (req, res) => {
	try {
		const { body } = req;
		const valid = await userValidation.loginSchema.validateAsync(body, {
			abortEarly: false,
		});
		const dbData = await userModel.findUserByEmail(valid.email);
		if (dbData.length != 0) {
			const isPassOk = await bcrypt.compareHash(
				valid.password,
				dbData[0].password
			);
			if (isPassOk) {
				const token = jwt.generateToken({
					_id: dbData[0]._id,
					email: dbData[0].email,
					username: dbData[0].username,
					isAdmin: dbData[0].isAdmin,
				});
				res.status(200).send({
					message: 'Welcome Back ' + dbData[0].username,
					user: {
						_id: dbData[0]._id,
						email: dbData[0].email,
						username: dbData[0].username,
						isAdmin: dbData[0].isAdmin,
					},
					token: token,
				});
			} else throw 'Password is incorrect';
		}
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = router;
