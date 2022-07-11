const router = require('express').Router();
const SongsModel = require('../../model/songsModel');
const UserModel = require('../../model/userModel');

router.get('/', async (req, res) => {
	try {
		const user = await UserModel.findUserByEmail(req.jwtData.email);
		const data = await SongsModel.findMySongs(user[0]._id);
		res.status(200).send(data);
	} catch (err) {
		res.status(400).send({ error: err });
	}
});

module.exports = router;
