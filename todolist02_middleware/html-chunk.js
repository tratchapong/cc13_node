exports.head = `
<html>
<head>
  <title>Home Page</title>
</head>
<body>
<br>
`

exports.navbar = `
  <nav style='display: flex; gap: 4px;'>
    <a href='/'>Home</a>
    <a href='/welcome'>Welcome</a>
  </nav>
  <hr>
`

exports.form = `
  <form action='/newtodo' method='post'>
    <input name='title'>
    <button>ok</button>
  </form>
`
exports.todo = (list) => {
  let out = '<ul>'
  for (let el of list) {
      out += '<li>' + el + '</li>'
  }
  out += '</ul>'
  return out
}

exports.footer = `
</body>
</html>
`

exports.notFound = `
  <h1>404, have no such a page</h1>
  <script>
    setTimeout(()=>{ location.href = '/' },2000)
  </script>
`

exports.welcome = (user) => {
  console.log(user.length)
  let outUser = user || 'Guest'
  return (`
  <h1>Welcome, ${outUser} </h1>
`)
}