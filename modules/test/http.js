const http = require('node:http')
const { findAvailablePort } = require('./free-port')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Test')
})

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(
      `server listening on port http://localhost:${server.address().port}`
    )
  })
})
