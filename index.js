const http = require('http')
const app = require('./app')
const config = require('./config/config')

const server = http.createServer(app)

server.listen(process.env.PORT)

console.log(`\x1b[32m ✔ Activo \x1b[0m server started in port ${process.env.PORT}`)