const Joi = require('joi');

const newSongSkeleton = {
	title: Joi.string().required().min(1),
	artist: Joi.string().required().min(1),
	description: Joi.string().required().min(3).max(100),
	link: Joi.string().uri().required(),
};
const newSongSkeletonNotRequired = {
	title: Joi.string().min(1),
	artist: Joi.string().min(1),
	description: Joi.string().min(3).max(100),
	link: Joi.string(),
};

const newSongSchema = Joi.object(newSongSkeleton);
const newSongSchemaNotRequired = Joi.object(newSongSkeletonNotRequired);
module.exports = {
	newSongSchema,
	newSongSchemaNotRequired,
};
