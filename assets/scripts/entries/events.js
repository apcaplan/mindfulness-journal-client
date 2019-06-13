'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store')

const onCreateEntry = event => {
  event.preventDefault()
  // console.log('Hello from Events! Create entry from events is:', event)
  const form = event.target
  const entryData = getFormFields(form)
  // entryData['user_id'] = store.user.id
  // console.log('entryData', entryData)
  api.createentry(entryData)
    .then(ui.onCreateEntrySuccess)
    .catch(ui.onCreateEntryFailure)
}

const onIndexEntry = event => {
  event.preventDefault()
  // console.log('Hello from Events! Find index for current user')
  // const form = event.target
  // const entryData = getFormFields(form)
  // console.log('entryData ', entryData)
  api.indexentry()
    .then(ui.onIndexEntrySuccess)
    .catch(ui.onIndexEntryFailure)
}

const onFindEntry = event => {
  event.preventDefault()
  // console.log('Hello from Events! Find entry from events is:', event)
  const form = event.target
  const entryData = getFormFields(form)
  // console.log('entryData ', entryData)
  api.findentry(entryData)
    .then(ui.onFindEntrySuccess)
    .catch(ui.onFindEntryFailure)
}

const onUpdateEntry = event => {
  event.preventDefault()
  // console.log('Hello from Events! Update entry from events is:', event)
  const form = event.target
  const formData = getFormFields(form)
  // console.log('formData ', formData)
  api.updateentry(formData)
    .then(ui.onUpdateEntrySuccess)
    .catch(ui.onUpdateEntryFailure)
}

const onDeleteEntry = event => {
  event.preventDefault()
  // console.log('Hello from Events!')
  api.deleteentry()
    .then(ui.onDeleteEntrySuccess)
    .catch(ui.onDeleteEntryFailure)
}

module.exports = {
  onCreateEntry,
  onIndexEntry,
  onFindEntry,
  onUpdateEntry,
  onDeleteEntry
}
