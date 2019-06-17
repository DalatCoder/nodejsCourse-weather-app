console.log('Client javascript is loaded!')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
  response.json().then((data) => {
    console.log(data)
  })
})

const address = 'Ho Chi Minh'
fetch(`/weather?address=${encodeURIComponent(address)}`).then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error)
    } else {
      console.log(data.location)
      console.log(data.forecast)
    }
  })
})
