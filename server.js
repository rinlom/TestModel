const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

var port = process.env.PORT || 5000;
app.listen(port, () => {
   console.log("application is listening on:", port);
});

const books = require('./data')

app.get('/api', (req, res) => {
  res.json(books)
})

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api', (req, res) => {
  books.push(req.body)
  res.status(201).json(req.body)
})
