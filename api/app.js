const http = require('http')
const url = require('url');
const store = require('./store.json')

function hdlRequest(req,res)  {
  const { method } = req
  const {pathname, query} = url.parse(req.url, true)
  if(pathname === '/') {
    res.writeHead(200, {'content-type' : 'application/json'})
    res.end(JSON.stringify({msg : 'Please go to /store'}))
  }
  if(pathname === '/store') {
    res.writeHead(200, {'content-type' : 'application/json'})
    res.end(JSON.stringify(store))

    console.log(query)
  }
}

const server = http.createServer(hdlRequest)

server.listen(8000, ()=> console.log('Server run on 8000'))