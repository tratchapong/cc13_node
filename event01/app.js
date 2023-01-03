const fs = require('fs');

const writeStream = fs.createWriteStream('file01.txt');
// const writeStream = fs.createWriteStream('./xxx/file01.txt');

writeStream.on('open', () => {
  console.log('File stream opened');
});

writeStream.on('drain', () => {
  console.log('Write buffer drained');
});

writeStream.on('close', () => {
  console.log('File stream closed');
});

writeStream.on('error', (error) => {
  console.error(error);
});

writeStream.write('Some data to write to the file');
writeStream.end();