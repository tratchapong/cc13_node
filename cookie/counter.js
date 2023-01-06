const http = require('http');
const url = require('url');
const querystring = require('querystring');

function httpHandler(req, res) {

  const {pathname} = url.parse(req.url);

  if(pathname==='/') {
    const {cookie} = req.headers
    let parsedData = querystring.parse(cookie, '; ')
    console.log(parsedData)
    let {counter} = parsedData
    if(!counter){
        res.setHeader('Set-Cookie', ['counter=1'])
        counter = 1
    }else {
        counter = +parsedData.counter + 1
        res.setHeader('Set-Cookie', ['counter=' + counter])
    }
    res.setHeader('content-type', 'text/html')
    res.statusCode = 200
    res.write(`<h1>Counter : ${counter}</h1>`)
    res.write(`<form action='/reset'><button>Reset</button></form>`)
    res.end()
  }
  else if (pathname === '/reset') {
    res.setHeader('Set-Cookie', ['counter=; expires=Thu, 01 Jan 1970 00:00:00 GMT']);
    res.statusCode = 302
    res.setHeader('location', '/')
    res.end()
  }
  else {
    res.end('Invalid request');
  }
}

const server = http.createServer(httpHandler);

server.listen(8000, () => {
  console.log('Server listening on port 8000');
});
