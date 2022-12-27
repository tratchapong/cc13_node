const http = require('http')
const url = require('url')
const querystring = require('querystring')


const head = `
<html>
<head>
  <title>Home Page</title>
</head>
<body>
<br>
`

const footer = `
</body>
</html>
`
const homepage = `
  <form action='/welcome' method='post'>
    <input name='user'>
    <button>ok</button>
  </form>
`
function parseCookie2(cookie, key) {
  const parsedData = querystring.parse(cookie, '; ')[key]
  return JSON.parse(parsedData)
}

function parseCookie(cookie, key) {
  const parsedData = querystring.parse(cookie)[key]
  console.log(parsedData)
  return parsedData
}

function setCookie(res, key, data) {
  res.setHeader('Set-Cookie', [`${key}=${data}`])
}

// const mock = { name: 'Andy', age: 35 }
mock = 'Super Codecamp'

const server = http.createServer( (req,res) => {
    parsedUrl = url.parse(req.url)
    parsedQuery = querystring.parse(req.url)

    if(parsedUrl.pathname === '/set-cookie' ) {
        // res.setHeader('Set-Cookie', ['data=' + JSON.stringify(mock)] )
        // setCookie(res, 'username', 'Andy')
        res.setHeader('Set-Cookie', ['data=' + mock])
        res.setHeader('Set-Cookie', ['user=' + 'Andy', 'age=34'])
        res.end('Cookie set!!')
    }
    else if(parsedUrl.pathname === '/get-cookie') {
        const dataCookie = req.headers.cookie
        // console.log(dataCookie)
        // const parsedData = querystring.parse(dataCookie, '; ').data
        // const data = JSON.parse(parsedData)
        const parsedData = querystring.parse(dataCookie, '; ')
        console.log(parsedData)
        // let data = parseCookie(dataCookie, 'data')
        // console.log(data)
        // res.write(`<h1>Welcome, ${dataCookie}</h1>`)
        // res.end(`<h1>Welcome, ${data.name}</h1>`)
        res.setHeader('Content-type', 'text/html')
        res.write(head)
        for(k in parsedData) {  
          res.write(`<h2>${k} = ${parsedData[k]}</h2>`)
        }
        res.write(footer)
        res.end()
    }
    else {
        res.write(head)
        res.write(homepage)
        res.end(footer)
    }
})

server.listen(5000, () => console.log('Server on port 5000..'))