// POST body
const http = require('http')

const form = `
<html>
<head>
  <title>The Form</title>
</head>
<body>
  <form action='/welcome' method='post'>
    <input name='user'>
    <button>ok</button>
  </form>
</body>
</html>
`
const welcome = `
<html>
<head>
  <title>Welcome Page</title>
</head>
<body>
  <h1>Welcome to Codecamp</h1>
</body>
</html>
`

function httpHandler(req, res) {
  let {url, method} = req
  if(url === '/') {
    res.writeHead(200, {
      'content-type':'text/html'
    })
    return res.end(form)
  } 
  if(url === '/welcome' && method==='POST') {
    let body = []
    req.on('data', chunk => { body.push(chunk) })
    req.on('end', () => { 
      body = Buffer.concat(body).toString() 
      res.writeHead(200, {
        'content-type':'text/html'
      })
      res.write('<h1>Post data : '+ body + '</h1>')
      return res.end()
    })
  }
  else {
    res.writeHead(404, {
      'content-type':'text/html'
    })
    return res.end('<h1>Page Not Found!!!</h1>')
  }
}

const server = http.createServer(httpHandler)

server.listen(8000)

