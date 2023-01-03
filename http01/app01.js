const http = require('http')

const server = http.createServer()

server.listen(8000)

server.on('request', (req, res) => {
  console.log(Object.keys(req.headers))
  console.log(req.url)
  console.log(req.method)
  res.statusCode=200
  res.setHeader('content-type', 'text/plain')
  res.write('Hello, Codecamp')
  res.end()
})
