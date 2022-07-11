const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 30,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	isAdmin: {
		type: Boolean,
		required: true,
		default: false,
	},
});

const Users = mongoose.model('users', userSchema);

const createNewUser = (username, password, email) => {
	const user = new Users({
		username,
		password,
		email,
	});
	return user.save();
};

const findUserByEmail = email => {
	return Users.find({ email });
};

const findUserById = userId => {
	return Users.findById({ _id: userId });
};

const updatePassword = (id, password) => {
	return Users.find;
};
module.exports = {
	createNewUser,
	findUserByEmail,
	findUserById,
	updatePassword,
};
