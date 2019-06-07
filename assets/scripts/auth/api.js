'use strict'

const config = require('../config')
// const store = require('../store')

const signup = formData => {
  console.log('Hello from API!')
  return $.ajax({
    url: config.apiUrl + 'sign-up',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  signup
}
