// Routing
const http = require('http')

function httpHandler(req, res) {
  let {url, method} = req
  if(url === '/') {
    res.writeHead(200, {
      'content-type':'text/html'
    })
    return res.end('<h1>Hello, Codecamp</h1>')
  } 
  if(url === '/form') {
    res.writeHead(200, {
      'content-type':'text/html'
    })
    res.write('<h1>Login</h1>')
    return res.end(`<input name='user'><button>ok</button>`)
  }
}

const server = http.createServer(httpHandler)

server.listen(8000)

