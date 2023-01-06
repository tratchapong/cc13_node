const http = require('http')
const url = require('url');
const db = require('./db/db')

function hdlRequest(req,res)  {
  const { method } = req
  const {pathname, query} = url.parse(req.url, true)
  if(pathname === '/') {
    res.writeHead(200, {'content-type' : 'application/json'})
    res.end(JSON.stringify({msg : 'Please go to /product'}))
  }
  else if(pathname === '/product') {
    res.writeHead(200, {'content-type' : 'application/json'})
    db.getAll().then( data => res.end(JSON.stringify(data, null, 2)) )  
  }
  else if( pathname.match(/\/product\/\d+/g) ) {
    res.writeHead(200, {'content-type' : 'application/json'})
    let id = pathname.split('/')[2]
    console.log('id :' +id)
    if(isNaN(id))
      return res.end(JSON.stringify({"msg":"/product/<id number> only"}))
    db.getProduct(+id).then(item => res.end(JSON.stringify(item, null, 2)))
  }
}

const server = http.createServer(hdlRequest)

server.listen(8000, ()=> console.log('Server run on 8000'))