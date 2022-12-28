exports.head = `
<html>
<head>
  <title>Home Page</title>
</head>
<body>
<br>
`;

exports.navbar = `
  <nav style='display: flex; gap: 4px;'>
    <a href='/'>Home</a>
    <a href='/login'>Login</a>
    <a href='/logout'>Logout</a>
  </nav>
  <hr>
`;

exports.form = `
  <form action='/newtodo' method='post'>
    <input name='title'>
    <button>add</button>
  </form>
`;

exports.todo = (list) => {
  let out = "<ul>";
  for (let el of list) {
    out += "<li>" + el + "</li>";
  }
  out += "</ul>";
  return out;
};

exports.footer = `
</body>
</html>
`;

exports.notFound = `
  <h1>404, have no such a page</h1>
  <script>
    setTimeout(()=>{ location.href = '/' },2000)
  </script>
`;

exports.loginform = `
  <form action='/letlogin' method='post'>
    <input name='username'>
    <input type='password' name='password'>
    <button>login</button>
  </form>
`;

exports.welcome = (user) => {
  let outUser = user || "Guest";
  return `
  <h1>Welcome, ${outUser} </h1>
`;
};

exports.redirect = (res) => {
  res.statusCode = 302
  res.setHeader('Location', '/login')
  res.end()
}