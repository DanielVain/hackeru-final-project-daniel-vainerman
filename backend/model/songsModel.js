const mongoose = require('mongoose');

const songsSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		minlength: 1,
	},
	artist: {
		type: String,
		required: true,
		minlength: 1,
	},
	description: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 100,
	},
	link: {
		type: String,
		required: true,
	},
	submittedAt: {
		type: Date,
		default: new Date(),
	},
	submittedBy: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	favorites: {
		type: Array,
	},
});

const Songs = mongoose.model('songs', songsSchema);

const addNewSong = (title, artist, description, link, submittedBy) => {
	const song = new Songs({ title, artist, description, link, submittedBy });
	return song.save();
};

const findAllSongs = () => {
	return Songs.find();
};

const findMySongs = submittedBy => {
	return Songs.find({ submittedBy });
};

const findSongById = id => {
	return Songs.findById(id);
};
const findSongAndUpdate = (id, data) => {
	return Songs.findByIdAndUpdate(id, data);
};
const deleteSong = id => {
	return Songs.findByIdAndDelete(id);
};

const getFavoriteSongs = id => {
	return Songs.find({ favorites: id });
};
module.exports = {
	addNewSong,
	findAllSongs,
	findMySongs,
	findSongById,
	findSongAndUpdate,
	deleteSong,
	getFavoriteSongs,
};
