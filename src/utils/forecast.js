const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const accessToken = 'fee3e6e79b9a143d6a7f3a639e14c4a1'
  const units = 'si'
  const url = `https://api.darksky.net/forecast/${accessToken}/${latitude},${longitude}?units=${units}`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!')
    } else if (body.error) {
      callback('Unable to find location.')
    } else {
      callback(undefined, {
        forecast: `${body.daily.summary} It is currently ${body.currently.temperature} degrees out. This high today is ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow}. There is a ${body.currently.precipProbability*100}% chance of rain.`
      })
    }
  })
}

module.exports = forecast
