// use httpHandler
const http = require('http')

function httpHandler(req, res) {
  let {url, method} = req
    console.log(url)
    console.log(method)
    res.writeHead(200, {
      'content-type':'text/html'
    })
    res.end('<h1>Hello, Codecamp</h1>')
}

const server = http.createServer(httpHandler)

server.listen(8000)