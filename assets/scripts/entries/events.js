'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('../store')

const onCreateEntry = event => {
  event.preventDefault()
  console.log('Hello from Events! Create entry from events is:', event)
  const form = event.target
  const entryData = getFormFields(form)
  // entryData['user_id'] = store.user.id
  console.log('entryData', entryData)
  api.createEntry(entryData)
    .then(ui.onCreateEntrySuccess)
    .catch(ui.onCreateEntryFailure)
}

const onIndexEntry = event => {
  event.preventDefault()
  console.log('Hello from Events! Find index for current user')
  api.indexEntry()
    .then(ui.onIndexEntrySuccess)
    .then(function () {
      $('.delete-entry').on('submit', onDeleteEntry)
    })
    .catch(ui.onIndexEntryFailure)
}

const onFindEntry = event => {
  event.preventDefault()
  console.log('Hello from Events! Find entry from events is:', event)
  const form = event.target
  const entryData = getFormFields(form)
  console.log('entryData ', entryData)
  api.findEntry(entryData)
    .then(ui.onFindEntrySuccess)
    .catch(ui.onFindEntryFailure)
}

const onUpdateEntry = event => {
  event.preventDefault()
  console.log('Hello from Events! Update entry from events is:', event)
  const form = event.target
  const formData = getFormFields(form)
  const id = $(event.target).closest('section').data('id')
  console.log('id: ', id)
  console.log('formData ', formData)
  api.updateEntry(id, formData)
    .then(() => onIndexEntry(event))
    .then(ui.onUpdateEntrySuccess)
    .catch(ui.onUpdateEntryFailure)
}

const onDeleteEntry = event => {
  event.preventDefault()
  console.log('Hello from Events!')
  const eventId = $(event.target).closest('section').data('id')
  api.deleteEntry(eventId)
    .then(() => onIndexEntry(event))
    .then(ui.onDeleteEntrySuccess)
    .catch(ui.onDeleteEntryFailure)
}

// Hide all entries
const hideAllEntries = event => {
  if ($.trim($('.container').html()) === '') {
    $('.error').text('No entries to hide!')
    $('.error').delay.fadeOut(3000)
  } else {
    $('.container').hide()
  }
}

const showUpdate = () => {
  $('.update').show()
}

const addHandlers = () => {
  $('#create-entry').on('submit', onCreateEntry)
  $('#update').on('submit', onUpdateEntry)
  $('#index').on('click', onIndexEntry)
  $('#find-entry').on('submit', onFindEntry)
  $('.container').on('click', '.delete-entry', onDeleteEntry)
  $('.container').on('click', '.update-entry', showUpdate)
  $('.container').on('click', 'hide-all-entries-btn', hideAllEntries)
}

module.exports = {
  onCreateEntry,
  onIndexEntry,
  onFindEntry,
  onUpdateEntry,
  onDeleteEntry,
  addHandlers
}
