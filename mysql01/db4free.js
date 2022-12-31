const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'db4free.net',
  user: 'ratchapong',
  password: '123456789',
  database: 'rtlab01'
}).promise()

module.exports = pool