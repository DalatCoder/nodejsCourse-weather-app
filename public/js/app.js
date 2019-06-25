console.log('>_ Nguyen Trong Hieu - Dai hoc Da Lat')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.getElementById('message-1')
const messageTwo = document.getElementById('message-2')

weatherForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const location = search.value

  weatherForm.reset()
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  const temp = await fetch(`/weather?address=${encodeURIComponent(location)}`)
  const data = await temp.json()

  if (data.error) {
    return messageOne.textContent = data.error
  }

  messageOne.textContent = data.location
  messageTwo.textContent = data.forecast
})
