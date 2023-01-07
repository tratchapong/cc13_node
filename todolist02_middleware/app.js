const http = require('http')
const route = require('./route')
const querystring = require('querystring')

const server = http.createServer()

function logRequest(req, res, next) {
  console.log('url='+req.url+', method='+req.method)
  req.AAA = 'Codecamp'
  next()
}

function parseBody(req, res, next) {
  // if(req.method==='POST' || req.method==='PUT') {
  let contentLength = req.headers['content-length']
  if(contentLength && contentLength > 0) {
    // console.log('Parse the body...')
    const body = []
    req.on('data', chunk => body.push(chunk))
    req.on('end', ()=> {
      const bufferBody = Buffer.concat(body).toString()
      const parsedBody = querystring.parse(bufferBody )
      req.body = parsedBody
      next()
    })
  } else {
    next()
  }
}

server.on('request', (req, res) => {
  // logRequest(req, res, ()=>route(req, res))
  logRequest(req, res, ()=>parseBody(req, res, ()=>route(req, res)))
})


server.listen(5000, ()=> console.log('Server on port 5000...'))