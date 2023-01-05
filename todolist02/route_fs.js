const html = require('./html-chunk')
// const list = ['HTML', 'CSS', 'Javascript']
const fs = require('fs')

module.exports = (req, res) => {
  const {url, method} = req
  res.setHeader('Content-Type', 'text/html')
  if (url==='/') {
    let rawlist = fs.readFileSync('./data.json', 'utf8')
    let list = JSON.parse(rawlist)
    console.log(list)
    res.write(html.head)
    res.write(html.navbar)
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
      let rawlist = fs.readFileSync('./data.json', 'utf8')
      let list = JSON.parse(rawlist)
      list.push(title)
      fs.writeFileSync('./data.json', JSON.stringify(list))
      res.statusCode = 302
      res.setHeader('Location', '/')
      return res.end()
    })
  }else {
    res.write(html.head)
    res.write(html.navbar)
    res.write(html.notFound)
    res.end(html.footer)
  }
}
