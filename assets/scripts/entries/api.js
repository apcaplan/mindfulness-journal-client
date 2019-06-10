'use strict'

const config = require('../config')
const store = require('../store')

const createentry = formData => {
  console.log('Hello from API!')
  return $.ajax({
    url: config.apiUrl + '/entries',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const findentry = formData => {
  console.log('Hello from API!')
  return $.ajax({
    url: config.apiUrl + '/entries',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const updateentry = formData => {
  console.log('Hello from API!')
  return $.ajax({
    url: config.apiUrl + '/entries/update-entry',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteentry = () => {
  console.log('Hello from API!')
  return $.ajax({
    url: config.apiUrl + '/entries/delete-entry',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createentry,
  findentry,
  updateentry,
  deleteentry
}
