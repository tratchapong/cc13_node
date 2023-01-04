const fs = require('fs/promises')

const newTodo = [
	{ id : 4, title: 'Learn HTML'} ,
]

fs.readFile('data.json')
.then( rs => {
  let todo = JSON.parse(rs)
  newTodo.unshift(...todo)
  return newTodo
})
.then( rs => {
  console.log('Write new data to file')
  return fs.writeFile('data.json', JSON.stringify(rs))
})
.then( ()=> {
  return fs.readFile('data.json')
})
.then( rs => console.log(JSON.parse(rs)))


// setTimeout(()=>console.log(newTodo),1000)