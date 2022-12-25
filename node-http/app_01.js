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

function httpHandler(req, res) {
  // const url = req.url
  // const method = req.method
  const {url, method} = req
  if(url === '/welcome') {
    console.log('welcome page')
    res.write(welcome)
  }
  res.write(homepage);
  res.end();
}

const server = http.createServer(httpHandler)

server.listen(5000)
