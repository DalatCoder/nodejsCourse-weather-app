const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    name: 'Trong Hieu',
    title: 'Weather app'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Trong Hieu'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help'
  })
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
