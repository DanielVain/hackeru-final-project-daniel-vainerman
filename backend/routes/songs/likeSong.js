const router = require('express').Router();
const mongoose = require('mongoose');
const { findSongById } = require('../../model/songsModel');

router.patch('/:id', async (req, res) => {
	try {
		const user = req.jwtData;
		let song = await findSongById(req.params.id);
		const songLikes = song.favorites.find(id => id === user._id);

		if (!songLikes) {
			song.favorites.push(user._id);
			song = await song.save();
			return res.send(song);
		}
		const songFiltered = song.favorites.filter(id => id !== user._id);
		song.favorites = songFiltered;
		song = await song.save();
		return res.status(200).send(song);
	} catch (error) {
		console.error(error);
		return res.status(500).send(error.message);
	}
});

module.exports = router;
