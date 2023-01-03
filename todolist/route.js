const html = require('./html-chunk')
// const list = ['HTML', 'CSS', 'Javascript']
const fs = require('fs')

module.exports = (req, res) => {
  const {url, method} = req
  res.setHeader('Content-Type', 'text/html')
  if (url==='/') {
    let rawlist = fs.readFileSync('./data.txt', 'utf8')
    console.log(rawlist.split())
    list = rawlist.split('\r\n')
    res.write(html.head)
    // res.write(html.navbar)
    res.write(html.form)
    res.write(html.todo(list))
    res.end(html.footer)
  }
  else if(url==='/newtodo' && method === 'POST') {
    const body = []
    req.on('data', chunk => body.push(chunk))
    req.on('end', ()=> {
      const parsedBody = Buffer.concat(body).toString()
      const title = parsedBody.split('=')[1].replaceAll('+', ' ')
      let rawlist = fs.readFileSync('./data.txt', 'utf8')
      newlist = rawlist+'\r\n'+title
      fs.writeFileSync('./data.txt', newlist)
      res.statusCode = 302
      res.setHeader('Location', '/')
      return res.end()
    })
  }else {
    res.end('this is not root path')
  }
}
