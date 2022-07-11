const express = require('express');
const rateLimit = require('express-rate-limit');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const usersRouter = require('./routes/usersRouter');
const songsRouter = require('./routes/songsRouter');
const cors = require('cors');
const auth = require('./middleware/auth');
const mySongsRouter = require('./routes/songs/allSongs');

mongoose
	.connect('mongodb://localhost:27017/headliner')
	.then(() => console.log('connected to db'))
	.catch(error => {
		console.log(`couldn't connect to db: ${error}`);
	});

const app = express();
const apiRequestLimiter = rateLimit({
	windowMs: 24 * 60 * 60 * 1000, // 24 hours
	max: 423000, // limit each IP to 423000 requests per 24 hours
});
app.use(apiRequestLimiter);
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/songs', songsRouter);

module.exports = app;
