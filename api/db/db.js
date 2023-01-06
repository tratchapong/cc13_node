const fs = require("fs/promises");

exports.getAll = () => {
  return fs.readFile("./db/store.json").then(JSON.parse);
}

exports.getProduct = (id) => {
  return fs.readFile("./db/store.json").then(JSON.parse)
  .then( all => {
    let idx = all.findIndex( x => +x.id === id)
    if(idx !== -1)
      return  all[idx]
    return { msg: 'Have no product'}
  })
}

// function addList(title) {
//   return getList()
//     .then((list) => {
//       list.push(title);
//       return list;
//     })
//     .then((list) => {
//       return fs.writeFile("./db/data.json", JSON.stringify(list, null, 2));
//     });
// }

// exports.getProduct(8)