const http = require('http');
const app = require('./app');
const config = require('./config/config');

const server = http.createServer(app);

server.listen(config.parameters.port);

console.log(
	`\x1b[32m ✔ Activo \x1b[0m server started in port ${config.parameters.port}`
);
