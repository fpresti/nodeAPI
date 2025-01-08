const express = require('express')
const app = express()
const PORT = process.env.PORT ?? 1234

app.disable('x-powered-by')

// for all the post with json content
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'hola a todos' })
})
app.get('/pokemon/pikachu', (req, res) => {
  res.end('GET Pikachu express')
})
app.post('/pokemon', (req, res) => {
  // TODO: save the pokemon on DB
  res.status(201).json(req.body)
})
app.use((req, res) => {
  res.status(404).send('<h1>404 - not found!</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port: http://localhost:${PORT}`)
})
