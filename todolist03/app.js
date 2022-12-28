const http = require('http')
const route = require('./route')

const server = http.createServer(route)

server.listen(5000, ()=> console.log('Server on port 5000...'))