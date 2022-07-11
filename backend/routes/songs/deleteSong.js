const router = require('express').Router();
const { deleteSong } = require('../../model/songsModel');

router.delete('/:id', async (req, res) => {
	try {
		await deleteSong(req.params.id);
		res.status(200).send('Card deleted successfully!');
	} catch (err) {
		res.status(400).send({ error: err });
	}
});

module.exports = router;
