const fs = require('fs/promises')

fs.readFile('package.json')
.then( JSON.parse )
.then( pkg => {
  pkg.main = "app.js"
  pkg.scripts.start = "nodemon app.js"
  return pkg
})
.then( pkg => fs.writeFile('package.json', JSON.stringify(pkg, null, 2))) 
.then(()=> fs.readFile('package.json'))
.then(JSON.parse)
.then(console.log)
