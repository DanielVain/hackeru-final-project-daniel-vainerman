const router = require('express').Router();
const { passwordSchema } = require('../../validation/usersValidation');
const bcrypt = require('../../util/bcrypt');
const { updatePassword } = require('../../model/userModel');

router.put('/:password', async (req, res) => {
	try {
		const valid = await passwordSchema.validateAsync(
			{ password: req.params.password },
			{
				abortEarly: false,
			}
		);
		valid.password = await bcrypt.createHash(valid.password);
		await updatePassword(req.jwtData._id, valid.password);
		res.status(200).send('Password Has Been Changed Successfully');
	} catch (err) {
		console.error(err);
		res.status(400).send(err);
	}
});

module.exports = router;
