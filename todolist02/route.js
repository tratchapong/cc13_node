const html = require('./html-chunk')
const fs = require('fs/promises')
const querystring = require('querystring')
const db = require('./db/db')

module.exports = (req, res) => {
  const {url, method} = req
  res.setHeader('Content-Type', 'text/html')
  if (url==='/') {
    db.getList()
    .then( list => {
      console.log(list)
      res.write(html.head)
      res.write(html.navbar)
      res.write(html.form)
      res.write(html.todo(list))
      res.end(html.footer)
    }).catch( err=> console.log(err))
  }
  else if(url==='/newtodo' && method === 'POST') {
    const body = []
    req.on('data', chunk => body.push(chunk))
    req.on('end', ()=> {
      const bufferBody = Buffer.concat(body).toString()
      const parsedBody = querystring.parse(bufferBody )
      const {title} = parsedBody
      db.addList(title)
      .then( ()=> {
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
      }).catch( err=> console.log(err))
    })
  }else {
    res.write(html.head)
    res.write(html.navbar)
    res.write(html.notFound)
    res.end(html.footer)
  }
}
