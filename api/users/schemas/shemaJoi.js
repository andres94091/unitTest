const Joi = require('joi');

const createUser = {
	body: {
		name: Joi.string().required(),
		age: Joi.number().required(),
	},
};

module.exports = {
	createUser,
};
