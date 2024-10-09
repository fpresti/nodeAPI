const os = require('node:os')

console.log('OS info' )
console.log('------------------' )
console.log('OS name: ', os.platform())
console.log('OS Version: ', os.release())
console.log('Architecture: ', os.arch())
console.log('CPUs: ', os.cpus())
console.log('Free memory', os.freemem()/1024/1024)
console.log('Total memory', os.totalmem()/1024/1024)

