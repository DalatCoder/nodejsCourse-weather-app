const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.end('Hello express!')
})

app.get('/help', (req, res) => {
  res.end('Help page.')
})

app.get('/about', (req, res) => {
  res.end('About page.')
})

app.get('/weather', (req, res) => {
  res.end('Weather page.')
})

app.listen(3000, () => {
  console.log('Server is running at port 3000')
})
