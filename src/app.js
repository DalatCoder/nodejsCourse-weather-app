const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello express</h1>')
})

app.get('/help', (req, res) => {
  res.send('<h1>Help page.</h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>About page.</h1>')
})

app.get('/weather', (req, res) => {
  res.send({
    location: 'Da Lat',
    temperature: 24.4,
    rainPercent: 50
  })
})

app.listen(3000, () => {
  console.log('Server is running at port 3000')
})
