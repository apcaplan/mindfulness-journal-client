'use strict'

const config = require('../config')
const store = require('../store')

const signup = formData => {
  console.log('Hello from API!')
  return $.ajax({
    url: config.apiUrl + 'sign-up',
    method: 'POST',
    data: formData
  })
}

const signin = formData => {
  console.log('Hello from API!')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changepw = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signout = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signup,
  signin,
  changepw,
  signout
}
