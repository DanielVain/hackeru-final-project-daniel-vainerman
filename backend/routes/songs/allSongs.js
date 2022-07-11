const router = require('express').Router();
const { findAllSongs } = require('../../model/songsModel');

router.get('/', async (req, res) => {
	try {
		const data = await findAllSongs();
		res.status(200).send(data);
	} catch (err) {
		res.status(400).send({ error: err });
	}
});

module.exports = router;
