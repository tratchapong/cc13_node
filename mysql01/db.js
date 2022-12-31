const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Codecamp2021',
  database: 'ecommerce'
}).promise()

module.exports = pool