// Importar mongoose
const mongoose = require('mongoose');

const {urlMongo} = require('../config/config').parameters;

// Funcion de inicialización del servicio
const register = async () => {
	mongoose.connect(urlMongo, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	mongoose.set('useCreateIndex', true);
	mongoose.connection
		.on('connected', () => {
			console.log(`\x1b[33mEstado de Mongo: \x1b[32m ✔ Activo \x1b[0m`);
		})
		.on('error', (error) => {
			console.log(`Ocurrio un error con Mongo: ${error.message}`);
		})
		// .on('open', () => {
		//   console.log('Open', 'Connection to database opened');
		// })
		.on('close', () => {
			console.log(`\x1b[33mEstado de Mongo: \x1b[31m ✘ Cerrado \x1b[0m`);
		})
		.on('disconnected', () => {
			console.log(`\x1b[33mEstado de Mongo: \x1b[31m ✘ Desconectado \x1b[0m`);
		});
};

module.exports = {
	register,
};
