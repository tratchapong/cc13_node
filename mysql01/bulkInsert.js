const db = require('./db')

// *** Use db.query + then

// let sql = 'INSERT INTO customers (name, address) VALUES ?'
// const values = [
//   ['one', 'address one'],
//   ['two', 'address two'],
// ]

// db.query(sql, [values]).then( rs => {
//   console.log(rs[0])
//   process.exit(0)
// }).catch(err=>console.log(err))

// --------------------------------

// *** Use db.query + async - await

// async function run() {
//   let sql = 'INSERT INTO customers (name, address) VALUES ?'
// const values = [
//   ['one', 'address one'],
//   ['two', 'address two'],
// ]

// let rs = await db.query(sql, [values])
//   console.log(rs[0])
//   process.exit(0)
// }

// run()

// --------------------------------

// *** use db.execute with array of object (normal data pattern) - need to be flatten 

const users = [
  {name: 'one', address: 'address one'},
  {name: 'two', address: 'address two'},
]

let sql = 'INSERT INTO customers (name, address) VALUES (?, ?)'
let padQ = ', (?, ?)'.repeat(users.length-1)
sql += padQ

console.log(sql)

let values = users.map(el => Object.values(el)).flat()
console.log(values)

db.execute(sql, values).then( rs=> {
  console.log(rs)
  process.exit(0)
}).catch(err => console.log(err))


