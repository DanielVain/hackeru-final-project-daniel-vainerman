const {
	newSongSchemaNotRequired,
} = require('../../validation/songsValidation');
const { findSongAndUpdate } = require('../../model/songsModel');
const router = require('express').Router();

router.put('/:id', async (req, res) => {
	try {
		const { body } = req;
		delete body._id;
		const valid = await newSongSchemaNotRequired.validateAsync(body, {
			abortEarly: false,
		});
		await findSongAndUpdate(req.params.id, valid);
		res.status(200).send('Song Updated Successfully!');
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = router;
