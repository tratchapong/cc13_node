const myrandom = require('./util')
const {sysInfo} = require('./util')

let arr = []

for(let i=1; i<5; i++)
  arr.push(myrandom())
console.log(arr)

console.log(sysInfo())



























// let util = require('./util')
// console.log(util())

// ------------

// console.log(require('./util')())
// console.log(require('./util')())
// console.log(require('./util')())

// ------------

// const util = require('./util')
// console.log(util.random())

// ------------

// const {random} = require('./util')
// console.log(random())

// ------------

// const rd = require('./util')
// console.log(rd())

// console.log(module)

