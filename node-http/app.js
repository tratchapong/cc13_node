const http = require('http')

let user =''
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
const welcome = (user) => {
  console.log(user.length)
  let outUser = user || 'Guest'
  return (`
  <h1>Welcome, ${outUser} </h1>
`)
}

const notFound = `
  <h1>404, have no such a page</h1>
`

function httpHandler(req, res) {
  const {url, method, headers : {host}} = req
  
  if(url === '/welcome' && method === 'POST') {
    const body= []
    req.on('data', chunk => {
      console.log(chunk)
      body.push(chunk)
    })
    req.on('end', ()=> {
      let parsedBody = Buffer.concat(body).toString()
      parsedBody = parsedBody.replace('+', ' ')
      console.log(parsedBody.split('='))
      user = parsedBody.split('=')[1].trim()
      console.log(user)
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
    // res.write(head)
    // res.write(notFound)
    // res.end(footer)
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  }

}

const server = http.createServer(httpHandler)

server.listen(5000)
