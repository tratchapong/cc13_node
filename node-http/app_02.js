// add notFound routing

const http = require('http')

const homepage = `
<html>
<head>
  <title>Home Page</title>
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
  <title>Login</title>
</head>
<body>
  <h1>Welcome</h1>
</body>
</html>
`

const notFound = `
<html>
<head>
  <title>Not Found</title>
</head>
<body>
  <h1>404, have no such a page</h1>
</body>
</html>
`

function httpHandler(req, res) {
  const {url, method, headers : {host}} = req
  if(url === '/welcome') {
    res.write(welcome)
    res.end()
  }
  else if(url === '/'){
    res.write(homepage);
    res.end();
  }
  else {
    res.write(notFound)
    res.end()
  }

}

const server = http.createServer(httpHandler)

server.listen(5000)
