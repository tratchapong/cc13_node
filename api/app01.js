const http = require('http')
const url = require('url')
const querystring = require('querystring')

const data = [
  { title: 'Learn HTML'},
  { title: 'Learn CSS'},
  { title: 'Learn Javascript'},
]

function httpHandle(req, res) {
  let {pathname} = url.parse(req.url,true)
  
  if( pathname==='/todo') {
    res.setHeader('Content-type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(data))
  } 
  else if( pathname.match(/\/todo\/\d+/g) ) {
    let id = +pathname.split('/')[2]
    // if(isNaN(id))
    //   return res.end(JSON.stringify({"msg":"Enter number only"}))
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

const server = http.createServer(httpHandle)

server.listen(8000)
