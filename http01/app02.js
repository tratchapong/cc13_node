// writeHead + res.end

const http = require('http')

const server = http.createServer( (req, res) => {
  console.log(req.url)
  console.log(req.method)
  res.writeHead(200, {
    'content-type':'text/plain',
    'special-key': 'codecamp'
  })
  res.end('Hello, Codecamp')
})

server.listen(8000)