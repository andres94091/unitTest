const moment = require('moment-timezone');
const userModel = require('../model');

async function saveUser(req, res) {
	const { name, age } = req.body;
	const creationDate = Number(moment.tz('America/Bogota').format('x'));

	await userModel.saveUser({
		name,
		age,
		creationDate,
	});

	res
		.json({
			message: 'ok',
		})
		.status(200);
}

module.exports = {
	saveUser,
};
