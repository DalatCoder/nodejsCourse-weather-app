const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

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
