'use strict'

const config = require('../config')
const store = require('../store')

const createentry = formData => {
  // console.log('Hello from API!')
  return $.ajax({
    url: config.apiUrl + '/entries',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const indexentry = entryData => {
  // console.log('Hello from API!')
  return $.ajax({
    url: config.apiUrl + '/entries/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: entryData
  })
}

const findentry = entryData => {
  // console.log('Hello from API!', entryData.entry.id)
  return $.ajax({
    url: config.apiUrl + '/entries/' + entryData.entry.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: entryData
  })
}

const updateentry = formData => {
  // console.log('Hello from API!')
  return $.ajax({
    url: config.apiUrl + '/entries/' + formData.entry.id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteentry = () => {
  // console.log('Hello from API!')
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
  indexentry,
  findentry,
  updateentry,
  deleteentry
}
