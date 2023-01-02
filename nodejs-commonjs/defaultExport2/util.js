const os = require('os')

module.exports = () => {
  return Math.floor(Math.random()*100)
}

function sysInfo() {
  return {
    cpu : os.cpus()[0].model,
    memory : os.totalmem(),
    version : os.version(),
  }
}







// module.exports = random

// module.exports = {random}

// module.exports = () => Math.floor(Math.random()*100)