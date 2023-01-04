const fs = require("fs/promises");
const todo = [
  { id: 1, title: "Learn HTML" },
  { id: 2, title: "Learn CSS" },
  { id: 3, title: "Learn Javascript" },
];

fs.writeFile('data.json',JSON.stringify(todo))
.then( _ => console.log('Done'))
.catch( err => console.log(err))



