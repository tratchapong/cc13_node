// Refactor the reused part...

const http = require('http')

const head = `
<html>
<head>
  <title>Home Page</title>
</head>
<body>
`

const footer = `
</body>
</html>
`
const homepage = `
  <form action='/welcome' method='post'>
    <input name='user'>
    <button>ok</button>
  </form>
`
const welcome = `
  <h1>Welcome</h1>
`

const notFound = `
  <h1>404, have no such a page</h1>
`

function httpHandler(req, res) {
  const {url, method, headers : {host}} = req
  if(url === '/welcome') {
    res.write(head)
    res.write(welcome)
    res.end(footer)
  }
  else if(url === '/'){
    res.write(head)
    res.write(homepage)
    res.end(footer)
  }
  else {
    res.write(head)
    res.write(notFound)
    res.end(footer)
  }

}

const server = http.createServer(httpHandler)

server.listen(5000)
