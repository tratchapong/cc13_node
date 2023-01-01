// try with curl will see more clear result
// for MS Windows : use curl inside Commnad prompt
// curl http://localhost:5000

const http = require('http')

const server = http.createServer()

server.on("request", (req, res) => {
  if(req.url === '/hello') {
    res.writeHead(200,{
      'Content-Type': 'text/html'
    })
    res.write('<h1>Codecamp</h1>')
    setTimeout(()=>{
      res.write('<h2>World</h2>')
    },2000)
    setTimeout(()=>{
      res.end('<h3>World</h3>')
    },4000)
  }
  else{
    res.writeHead(200,{
      'Content-type': 'text/javascript'
    })
    res.end('alert(999)')
  }
})

server.listen(5000, ()=> console.log('Server run on 5000'))

