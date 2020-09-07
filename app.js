const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./services/mongo');
// const swaggerUi = require('swagger-ui-express');

const status = require('./api/status/routes');
const playGround = require('./api/playGround/routes');
const users = require('./api/users/routes');

const { handleError } = require('./helpers/error');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*');

	// Request methods you wish to allow
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	);

	// Request headers you wish to allow
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-Requested-With,content-type, authorization, token_refresh'
	);

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

app.use('/status', status);
app.use('/playGround', playGround);
app.use('/users', users);

app.use((err, res) => {
	if (!err.statusCode) err.statusCode = 500;
	handleError(err, res);
});

// Custom 404 route not found handler
app.use((req, res) => {
	res.status(404).json({
		status: 404,
		message: 'No existe la ruta',
	});
});

mongoose.register();
module.exports = app;
