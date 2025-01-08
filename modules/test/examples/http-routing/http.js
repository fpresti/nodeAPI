const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html')

  if (req.url === '/') {
    res.statusCode = 200
    res.end('Bienvenido a fpresti homepage.')
  } else if (req.url === '/contacto') {
    res.end('<h1>Contacto</h1')
  } else {
    res.statusCode = 400 // Not found
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
