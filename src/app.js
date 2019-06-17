const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
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

app.get('/weather', (req, res) => {
  const address = req.query.address;

  if (!address) {
    return res.send({
      error: 'You must provide an address!'
    })
  }

  geoCode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return res.send({
        error
      })
    }

    forecast(latitude, longitude, (error, { forecast } ) => {
      if (error) {
        return res.send({
          error
        })
      }

      res.send({
        location,
        forecast,
        address
      })
    })
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    helpText: 'This is some helpful text',
    name: 'Trong Hieu'
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    errorMessage: 'Article not found!',
    title: '404',
    name: 'Trong Hieu'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    errorMessage: 'Page not found!',
    title: '404',
    name: 'Trong Hieu'
  })
})

app.listen(3000, () => {
  console.log('Server is running at port 3000')
})
