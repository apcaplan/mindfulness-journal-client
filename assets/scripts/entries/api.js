'use strict'

const config = require('../config')
const store = require('../store')

const createEntry = formData => {
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

const indexEntry = entryData => {
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

const findEntry = entryData => {
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

const updateEntry = (id, formData) => {
  // console.log('Hello from API!')
  return $.ajax({
    url: config.apiUrl + '/entries/' + id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteEntry = (entryId) => {
  // console.log('Hello from API!')
  return $.ajax({
    url: config.apiUrl + '/entries/' + entryId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createEntry,
  indexEntry,
  findEntry,
  updateEntry,
  deleteEntry
}
