'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const getFormFields = require('../../../lib/get-form-fields.js')

// const store = require('../store')

const onCreateEntry = event => {
  event.preventDefault()
  const form = event.target
  // entryData['user_id'] = store.user.id
  const entryData = getFormFields(form)
  // entryData['user_id'] = store.user.id
  console.log('entryData', entryData)
  api.createEntry(entryData)
    .then(ui.onCreateEntrySuccess)
    .catch(ui.onCreateEntryFailure)
}

const onIndexEntry = event => {
  event.preventDefault()
  $('#hide-entries').removeClass('d-none')
  $('#index').addClass('d-none')
  // $('.update-entry-form').addClass('d-none')
  // if ($(this).text() === 'Hide all entries') {
  //   $('#index').text('Show all entries')
  //   $('.landing').hide()
  // } else {
  $('.landing').show()
  // (this).text('Hide all entries')
  api.indexEntry()
    .then(ui.onIndexEntrySuccess)
    .then(function () {
      $('.delete-entry').on('submit', onDeleteEntry)
      $('#update').on('submit', onUpdateEntry)
    })
    .catch(ui.onIndexEntryFailure)
}
// }

const onFindEntry = event => {
  event.preventDefault()
  // console.log('Hello from Events! Find entry from events is:', event)
  const form = event.target
  const entryData = getFormFields(form)
  // console.log('entryData ', entryData)
  api.findEntry(entryData)
    .then(ui.onFindEntrySuccess)
    .catch(ui.onFindEntryFailure)
}

const onClickUpdate = event => {
  event.preventDefault()

  $('.log').each(function() {
    $('.log').addClass('hidden')
  })

  const id = $(event.target).closest('section').data('id')
  store.entryId = id
  const date = $(event.target).closest('section').data('date')
  store.entryDate = date
  const length = $(event.target).closest('section').data('length')
  store.entryLength = length
  const practice = $(event.target).closest('section').data('practice')
  store.entryPractice = practice
  const notes = $(event.target).closest('section').data('notes')
  store.entryNotes = notes

  $(`#entry-${id}`).toggleClass('hidden')

  ui.populateUpdateForm()
}

const onUpdateEntry = event => {
  event.preventDefault()
  $('.update-entry').hide()
  $('.log').toggleClass('hidden')
  // console.log('Hello from Events! Update entry from events is:', event)
  const form = event.target
  const formData = getFormFields(form)
  const id = $(event.target).closest('section').data('id')
  // console.log('id: ', id)
  // console.log('formData ', formData)
  api.updateEntry(id, formData)
    .then(ui.onUpdateEntrySuccess)
    .then(setTimeout(() => onIndexEntry(event), 2500))
    .catch(ui.onUpdateEntryFailure)
}

const onDeleteEntry = event => {
  event.preventDefault()
  // console.log('Hello from Events!')
  const eventId = $(event.target).closest('section').data('id')
  api.deleteEntry(eventId)

    .then(ui.onDeleteEntrySuccess)
    .then(setTimeout(() => onIndexEntry(event), 2500))
    .catch(ui.onDeleteEntryFailure)
}

// Hide all entries
const hideAllEntries = event => {
  $('.landing').hide()
  $('#hide-entries').addClass('d-none')
  $('#index').removeClass('d-none')
}

const showUpdate = event => {
  const eventId = $(event.target).closest('section').data('id')
  $(`#entry-${eventId}`).toggleClass('d-none')
}

const addHandlers = () => {
  $('#create-entry').on('submit', onCreateEntry)
  $('.landing').on('submit', '.update-entry-form', onUpdateEntry)
  $('#index').on('click', onIndexEntry)
  $('#find-entry').on('submit', onFindEntry)
  $('.landing').on('click', '.delete-entry', onDeleteEntry)
  $('.landing').on('click', '.update-entry', showUpdate)
  $('#hide-entries').on('click', hideAllEntries)
}

module.exports = {
  onCreateEntry,
  onClickUpdate,
  onIndexEntry,
  onFindEntry,
  onUpdateEntry,
  onDeleteEntry,
  addHandlers
}
