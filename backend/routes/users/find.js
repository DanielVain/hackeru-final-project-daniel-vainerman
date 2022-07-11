const router = require('express').Router();
const { findUserById } = require('../../model/userModel');

router.get('/:id', async (req, res) => {
	try {
		const userData = await findUserById(req.params.id);
		res
			.status(200)
			.send({ username: userData.username, email: userData.email });
	} catch (error) {
		res.status(400).send(error);
	}
});
module.exports = router;
