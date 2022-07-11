const express = require('express');
const router = express();
const auth = require('../middleware/auth');
const allSongsRouter = require('./songs/allSongs');
const findSongRouter = require('./songs/findSong');
const addNewSongRouter = require('./songs/addNewSong');
const mySongsRouter = require('./songs/mySongs');
const editSongRouter = require('./songs/editSong');
const deleteSongRouter = require('./songs/deleteSong');
const likeSongRouter = require('./songs/likeSong');
const getLikedSongRouter = require('./songs/getLikedSongs');

router.use('/find', auth, findSongRouter);
router.use('/songs', allSongsRouter);
router.use('/add-new-song', auth, addNewSongRouter);
router.use('/edit-song', auth, editSongRouter);
router.use('/delete-song', auth, deleteSongRouter);
router.use('/mySongs', auth, mySongsRouter);
router.use('/like-song', auth, likeSongRouter);
router.use('/liked-songs', auth, getLikedSongRouter);

module.exports = router;
