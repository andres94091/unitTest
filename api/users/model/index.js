const UserSchema = require('../schemas/user');

async function saveUser(userData) {
	const user = new UserSchema(userData);
	await user.save();
}

module.exports = {
	saveUser,
};
