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
