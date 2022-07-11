const { findSongById } = require('../../model/songsModel');

const router = require('express').Router();

router.get('/:id', async (req, res) => {
	try {
		const data = await findSongById(req.params.id);
		res.status(200).send(data);
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = router;
