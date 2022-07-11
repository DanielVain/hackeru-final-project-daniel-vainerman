const express = require('express');
const router = express();
const { findUserByEmail } = require('../../model/userModel');
const { newSongSchema } = require('../../validation/songsValidation');
const { addNewSong } = require('../../model/songsModel');

router.post('/', async (req, res) => {
	try {
		const { body } = req;
		const valid = await newSongSchema.validateAsync(body, {
			abortEarly: false,
		});
		const userData = await findUserByEmail(req.jwtData.email);
		const userId = userData[0]._id;
		const newSong = await addNewSong(
			valid.title,
			valid.artist,
			valid.description,
			valid.link,
			userId
		);
		res.status(200).send(`New Song ${newSong.title} Successfully Created!`);
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;
