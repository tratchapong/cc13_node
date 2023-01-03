const events = require('events')
let eventEmitter = new events.EventEmitter()

function eventHandler() {
  console.log('I hear CLICK signal')
}

eventEmitter.on('click', eventHandler)

function random() {
  return Math.floor(Math.random()*10)
}

for (let i=0; i<10; i++){
  let r = random()
  if(r>5) eventEmitter.emit('click')
  console.log(r)
}
