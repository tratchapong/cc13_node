const http = require('http')
const url_lib = require('url')
const querystring = require('querystring')

const data = [
  { title: 'Learn HTML'},
  { title: 'Learn CSS'},
  { title: 'Learn Javascript'},
]

function handleRequest(req, res) {
  url = url_lib.parse(req.url,true).pathname
  console.log(url)
  if( url==='/todo') {
    res.setHeader('Content-type', 'application/json')
    // res.statusCode = 200
    res.end(JSON.stringify(data))
  } else if( url.match(/\/todo\/\d+/g) ) {
    let id = +url.split('/')[2]
    if(isNaN(id))
      return res.end(JSON.stringify({"msg":"Enter number only"}))
    console.log(id)
    res.setHeader('Content-type', 'application/json')
    if(id>data.length)
      return res.end(JSON.stringify({ "msg":"Have no data"}))
    res.end(JSON.stringify(data[id-1]))
  } else {
    res.setHeader('content-type', 'application/json')
    res.statusCode = 404
    res.end(JSON.stringify({"msg" : "Path Not Found"}))
  }

}

const server = http.createServer(handleRequest)

server.listen(5000)
