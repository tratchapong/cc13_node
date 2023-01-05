const html = require('./html-chunk')
const fs = require('fs/promises')
const querystring = require('querystring')

module.exports = (req, res) => {
  const {url, method} = req
  res.setHeader('Content-Type', 'text/html')
  if (url==='/') {
    fs.readFile('./data.json')
    .then( rawlist => {
      let list = JSON.parse(rawlist)
      console.log(list)
      res.write(html.head)
      res.write(html.navbar)
      res.write(html.form)
      res.write(html.todo(list))
      res.end(html.footer)
    })
  }
  else if(url==='/newtodo' && method === 'POST') {
    const body = []
    req.on('data', chunk => body.push(chunk))
    req.on('end', ()=> {
      const bufferBody = Buffer.concat(body).toString()
      const parsedBody = querystring.parse(bufferBody )
      const {title} = parsedBody
      fs.readFile('./data.json')
      .then( rawlist => {
        let list = JSON.parse(rawlist)
        list.push(title)
        return list})
      .then(list => {
        return fs.writeFile('./data.json', JSON.stringify(list,null,2))
      }).then( ()=> {
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
      })
    })
  }else {
    res.write(html.head)
    res.write(html.navbar)
    res.write(html.notFound)
    res.end(html.footer)
  }
}
