const db = require('./db')

db.query('SELECT * FROM customers').then(rs=> {
  console.log(rs[0])
  process.exit(0)
}).catch(err => console.log(err))


