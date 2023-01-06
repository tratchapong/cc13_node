const http = require('http');
const url = require('url');
const querystring = require('querystring');

function httpHandler(req, res) {

  const {pathname} = url.parse(req.url);

  if (pathname === '/set-cookie') {
    let user = 'codecamp'
    res.setHeader('Set-Cookie', ['Last=' + new Date().toDateString(), 'user=' + user]);
    res.end('Cookie set');
  }
  else if (pathname === '/get-cookie') {
    const {cookie} = req.headers;
    console.log(cookie)
    parsedData = querystring.parse(cookie, '; ')
    console.log(parsedData)
    res.write(`Welcome: ${parsedData.user}, `);
    res.end(`Last login: ${parsedData.Last}`);
  }
  else if (pathname === '/delete-cookie') {
    res.setHeader('Set-Cookie', ['user=; expires=Thu, 01 Jan 1970 00:00:00 GMT']);
    res.end('Cookie deleted');
  }
  else {
    res.end('Invalid request');
  }
}

const server = http.createServer(httpHandler);

server.listen(8000, () => {
  console.log('Server listening on port 8000');
});
