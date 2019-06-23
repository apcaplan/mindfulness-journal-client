'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onCreateEntry = event => {
  event.preventDefault()
  const form = event.target
  const entryData = getFormFields(form)
  api.createEntry(entryData)
    .then(ui.onCreateEntrySuccess)
    .then(onIndexFirst)
    .catch(ui.onCreateEntryFailure)
}

const onIndexFirst = event => {
  if ($.trim($('.landing').html()) === '') {
    api.indexEntry()
      .then(ui.onIndexEntrySuccess)
      .then(buttonChageHide)
      .then(function () {
        $('.delete-entry').on('submit', onDeleteEntry)
        $('#update').on('submit', onUpdateEntry)
      })
      .catch(ui.onIndexEntryFailure)
  }
}

const onIndexEntry = event => {
  event.preventDefault()
  if ($.trim($('.landing').html()) === '') {
    ui.onIndexEmpty()
  } else {
    buttonChageHide()
    $('.landing').show()
    api.indexEntry()
      .then(ui.onIndexEntrySuccess)
      .then(function () {
        $('.delete-entry').on('submit', onDeleteEntry)
        $('#update').on('submit', onUpdateEntry)
      })
      .catch(ui.onIndexEntryFailure)
  }
}

const onFindEntry = event => {
  event.preventDefault()
  const form = event.target
  const entryData = getFormFields(form)
  api.findEntry(entryData)
    .then(ui.onFindEntrySuccess)
    .catch(ui.onFindEntryFailure)
}

const onClickUpdate = event => {
  const id = $(event.target).closest('section').data('id')

  store.entryDate = $(`#date-entry-${id}`).text().trim()
  store.entryLength = $(`#length-entry-${id}`).text().trim()
  store.entryPractice = $(`#practice-entry-${id}`).text().trim()
  store.entryNotes = $(`#notes-entry-${id}`).text().trim()

  ui.populateUpdateForm()
}

const onUpdateEntry = event => {
  event.preventDefault()
  $('.update-entry').hide()
  $('.log').toggleClass('hidden')
  const form = event.target
  const formData = getFormFields(form)
  const id = $(event.target).closest('section').data('id')
  api.updateEntry(id, formData)
    .then(ui.onUpdateEntrySuccess)
    .then(setTimeout(() => onIndexEntry(event), 2500))
    .catch(ui.onUpdateEntryFailure)
}

// const onDeleteConfirm = event => {
//   const id = $(event.target).closest('section').data('id')
//   $('.delete-confirm').removeClass('d-none')
//   store.deleteId = id
//   console.log(store.deleteId)
// }

const onDeleteEntry = event => {
  event.preventDefault()
  const lastEntryCheck = function () {
    if ($.trim($('.landing').html()) === '') {
      buttonChangeShow()
    }
  }
  const eventId = $(event.target).closest('section').data('id')
  // const id = store.deleteId
  api.deleteEntry(eventId)
    // api.deleteEntry(id)
    .then(ui.onDeleteEntrySuccess)
    .then(setTimeout(() => onIndexEntry(event), 2500))
    // .then($('delete-confirm').toggleClass('hidden'))
    .then(setTimeout(() => lastEntryCheck(), 2600))
    .catch(ui.onDeleteEntryFailure)
}
// const onDeleteCancel = event => {
//   event.preventDefault()
//   $('delete-confirm').toggleClass('hidden')
// }

// Hide all entries
const hideAllEntries = event => {
  $('.landing').hide()
  buttonChangeShow()
}

const showUpdate = event => {
  event.preventDefault()
  // console.log('Hi! heres the event:', event)
  // if ($.trim($('.landing').html()) === '') {
  //   $('.landing').show()
  //   $('.landing').html('Your journal is empty. Add some entries first!')
  // } else {
  const eventId = $(event.target).closest('section').data('id')
  $(`#entry-${eventId}`).toggleClass('d-none')
  onClickUpdate(event)
  // }
}

const buttonChangeShow = () => {
  $('#hide-entries').addClass('d-none')
  $('#index').removeClass('d-none')
}

const buttonChageHide = () => {
  $('#hide-entries').removeClass('d-none')
  $('#index').addClass('d-none')
}

const addHandlers = () => {
  $('#create-entry').on('submit', onCreateEntry)
  $('.landing').on('submit', '.update-entry-form', onUpdateEntry)
  $('#index').on('click', onIndexEntry)
  $('#find-entry').on('submit', onFindEntry)
  $('.landing').on('click', '.delete-entry', onDeleteEntry)

  // $('.landing').on('click', '.delete-entry', onDeleteConfirm)
  // $('.landing').on('click', '.delete-affirm', onDeleteEntry)
  // $('.landing').on('.click', '.delete-cancel', onDeleteCancel)

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
  buttonChangeShow,
  addHandlers
}
