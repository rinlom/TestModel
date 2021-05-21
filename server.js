const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})

const books = require('./data')

app.get('/api', (req, res) => {
  res.json(books)
})
