const express = require('express');
const router = express.Router();
const userModel = require('../../model/userModel');
const bcrypt = require('../../util/bcrypt');
const userValidation = require('../../validation/usersValidation');

//* register
router.post('/', async (req, res) => {
	try {
		const { body } = req;
		const valid = await userValidation.registerSchema.validateAsync(body, {
			abortEarly: false,
		});
		valid.password = await bcrypt.createHash(valid.password);
		const doesUserExist = await userModel.findUserByEmail(valid.email);
		if (doesUserExist.length != 0) {
			throw 'Email Already Exists, Please enter another email address';
		} else {
			const user = await userModel.createNewUser(
				valid.username,
				valid.password,
				valid.email
			);
		}
		res.status(200).send(`User ${valid.username} Successfully Created`);
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = router;
