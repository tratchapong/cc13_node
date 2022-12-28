const html = require('./html-chunk')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')

const users = ['andy', 'bobby', 'candy', 'danny']
module.exports = (req, res) => {
  const {url, method} = req
  res.setHeader('Content-Type', 'text/html')
  if (url==='/') {
    const checkuser = querystring.parse(req.headers.cookie, '; ').username
    let rawlist = fs.readFileSync('./data.json', 'utf8')
    let list = JSON.parse(rawlist)
    console.log(list)
    res.write(html.head)
    res.write(html.navbar)
    if(checkuser) {
      res.write(html.form)
      res.write(html.todo(list))
    }
    else {
      res.write('<h1>Please login..</h1>')
    }
    return res.end(html.footer)
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
  }
  else if(url==='/letlogin' && method==='POST') {
    const body = []
    req.on('data', chunk => body.push(chunk))
    req.on('end', ()=> {
      const parsedBody = Buffer.concat(body).toString()
      let username = querystring.parse(parsedBody).username.trim()
      // console.log(parsedBody)
      console.log(`|${username}|`)
      // let checkuser = users.find(x=> x===username)
      if(users.find(x => x === username)) {
        console.log('ok')
        res.setHeader('Set-Cookie', ['username=' + username])
        res.write(html.head)
        res.write(html.navbar)
        // res.write(html.loginform)
        res.write(html.welcome(username))
        return res.end(html.footer)        
      }else {
        console.log('not ok')
      }
    })
  } 
  else if(url==='/login') {
    const cookie = req.headers.cookie
    const checkuser = querystring.parse(cookie, '; ').username
    console.log(checkuser)
    res.write(html.head)
    res.write(html.navbar)
    if (!checkuser)
      res.write(html.loginform)
    else
      res.write(html.welcome(checkuser))
    return res.end(html.footer)
  }
  else if(url==='/logout') {
    res.setHeader('Set-Cookie', ['username=; expires=Thu, 01 Jan 1970 00:00:00 GMT'])
    html.redirect(res)
  } 
  else {
    res.write(html.head)
    res.write(html.navbar)
    res.write(html.notFound)
    res.end(html.footer)
  }
}
