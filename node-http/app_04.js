// parse body with POST method

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
const welcome = (user = 'Guest') => (`
  <h1>Welcome, ${user} </h1>
`)

const notFound = `
  <h1>404, have no such a page</h1>
`
let user = ''
function httpHandler(req, res) {
  const {url, method, headers : {host}} = req
  
  if(url === '/welcome' && method === 'POST') {
    const body= []
    req.on('data', chunk => {
      console.log(chunk)
      body.push(chunk)
    })
    req.on('end', ()=> {
      const parsedBody = Buffer.concat(body).toString()
      user = parsedBody.split('=')[1]
      res.write(head)
      res.write(welcome(user))
      res.end(footer)
    })
  }
  else if(url === '/welcome') {
    res.write(head)
    res.write(welcome(user))
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
