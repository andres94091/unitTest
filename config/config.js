require('dotenv').config();

module.exports = {
	parameters: {
		port: process.env.PORT || 8000,
		urlMongo: process.env.urlMongo || '',
	},
};
