const fs = require("fs/promises");

function getList() {
  return fs.readFile("./db/data.json").then(JSON.parse);
}

function addList(title) {
  return getList()
    .then((list) => {
      list.push(title);
      return list;
    })
    .then((list) => {
      return fs.writeFile("./db/data.json", JSON.stringify(list, null, 2));
    });
}

module.exports = { getList, addList };
