const fs = require('fs');

const folderName = 'folder01';

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  } else {
    console.log(folderName + ' Already created')
  }
} catch (err) {
  console.error(err);
}

let dir = fs.readdirSync('.')
console.log(dir)
