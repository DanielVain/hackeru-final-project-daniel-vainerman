const { getFavoriteSongs } = require('../../model/songsModel');

const router = require('express').Router();

router.get('/', async (req, res) => {
	try {
		const { _id } = req.jwtData;
		const favoriteSongs = await getFavoriteSongs(_id);
		res.status(200).send(favoriteSongs);
	} catch (err) {
		console.error(err);
		res.status(500).send(err.message);
	}
});

module.exports = router;
