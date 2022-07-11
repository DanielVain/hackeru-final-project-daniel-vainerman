const Joi = require('joi');

const loginSkeleton = {
	email: Joi.string()
		.email({
			minDomainSegments: 2,
			tlds: {
				allow: ['com', 'net'],
			},
		})
		.messages({
			'string.empty': 'Please input an email',
			'string.email': 'Please enter emails using .com, .net',
		})
		.required(),
	password: Joi.string()
		.pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
		.required()
		.messages({
			'string.empty': 'Please enter a password',
			'string.pattern.base': 'Please enter a valid password (8-30 characters)',
		}),
};

const registerSkeleton = {
	...loginSkeleton,
	username: Joi.string().required().min(3).max(30).messages({
		'string.empty': 'Please enter a username',
		'string.min': 'name must be 3-30 characters long',
		'string.max': 'name must be 3-30 characters long',
	}),
};

const passwordSkeleton = {
	password: Joi.string()
		.pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
		.required()
		.messages({
			'string.empty': 'Please enter a password',
			'string.pattern.base': 'Please enter a valid password (8-30 characters)',
		}),
};

const loginSchema = Joi.object(loginSkeleton);
const registerSchema = Joi.object(registerSkeleton);
const passwordSchema = Joi.object(passwordSkeleton);

module.exports = {
	loginSchema,
	registerSchema,
	passwordSchema,
};
