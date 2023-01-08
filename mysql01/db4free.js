const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'db4free.net',
  user: '',
  password: '',
  database: ''
}).promise()

module.exports = pool