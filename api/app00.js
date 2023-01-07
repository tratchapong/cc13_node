const http = require('http');
const url = require('url');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response status code and header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  // Parse the request URL to get the pathname and query string
  const { pathname, query } = url.parse(req.url, true);

  // Check the request method and path
  // if (pathname === '/greet/:name') {
  if (pathname.match(/\/greet\/./)) {
    // If it's a GET request to the '/greet/:name' path, extract the name parameter from the pathname and send a greeting
    const name = pathname.split('/')[2];
    res.end(JSON.stringify({ message: `Hello, ${name}!` }));
  } else {
    // For any other request, send a 404 Not Found response
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

server.listen(8000, () => {
  console.log('API listening on port 8000');
});
