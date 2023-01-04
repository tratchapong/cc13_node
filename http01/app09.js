// apart html chunk + list
const http = require('http')
const student = ['Erk', 'Tum', 'Ope', 'Pink', 'Mark']

const head = `
<html>
<head>
  <title>Home Page</title>
</head>
<body>
<br>
`

const welcome = `
  <h1>Welcome to Codecamp</h1>
`

const notFound = `
  <h1>404, have no such a page</h1>
  <script>
    setTimeout(()=>{ location.href = '/' },2000)
  </script>
`

const footer = `
</body>
</html>
`

function makeList(list) {
  let out = '<ul>'
  for (let el of list) {
      out += '<li>' + el + '</li>'
  }
  out += '</ul>'
  return out
}

function httpHandler(req, res) {
  let {url, method} = req
  if(url === '/') {
    res.writeHead(200, {
      'content-type':'text/html'
    })
    res.write(head)
    res.write(welcome)
    res.write(makeList(student))
    res.write(footer)
    return res.end()
  } 
  else {
    res.writeHead(404, {
      'content-type':'text/html'
    })    
    res.write(head)
    res.write(notFound)
    res.write(footer)
    return res.end()
  }
}

const server = http.createServer(httpHandler)

server.listen(8000)

