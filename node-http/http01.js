const http = require('http')

const server = http.createServer()

server.on("request", (req, res) => {
  if(req.url === '/hello') {
    res.writeHead(200,{
      'Content-Type': 'text/plain'
    })
    res.write('<h1>Hello,</h1>')
    res.end('<h2>World</h3>')
  }
})

server.listen(5000, ()=> console.log('Server run on 5000'))

