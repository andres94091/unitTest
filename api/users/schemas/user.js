const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
	name: String,
	age: Number,
	creationDate: Number,
});

const user = mongoose.model('user', UserSchema);
module.exports = user;
