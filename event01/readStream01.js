const fs = require('fs');

const readStream = fs.createReadStream('file.txt');
let counter = 0;
readStream.on('open', () => {
  console.log('File stream opened');
});

readStream.on('data', (chunk) => {
  counter++
  console.log(counter)
  // console.log(chunk)
  console.log(`Received ${chunk.length} bytes of data`);
});

readStream.on('end', () => {
  console.log('File stream ended');
});

readStream.on('close', () => {
  console.log('File stream closed');
  console.log(counter)
});

readStream.on('error', (error) => {
  console.error(error);
});

