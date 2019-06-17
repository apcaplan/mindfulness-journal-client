// const store = require('../store')
const showEntriesTemplate = require('../templates/entry-listing.handlebars')
const store = require('../store')

// Clear modal
const clearModal = () => {
  $('updateEntryDate').val('')
  $('updateEntryLength').val('')
  $('updateEntryType').val('')
  $('updateEntryNotes').val('')
}

const onCreateEntrySuccess = responseData => {
  $('.cp').text('Successfully created new entry!').fadeOut(2500)
  $('#create-entry').trigger('reset')
  setTimeout(() => $('.cp').text('Create another new entry?').fadeIn(2500), 2502)
}

const onCreateEntryFailure = responseData => {
  $('.cp').text('Could not create entry').fadeOut(2500)
  setTimeout(() => $('.cp').text('Try again?').fadeIn(2500), 2502)
}

const populateUpdateForm = event => {
  $('.date-edit').val(store.entryDate)
  $('.length-edit').val(store.entryLength)
  $('.practice-edit').val(store.entryPractice)
  $('.notes-edit').val(store.entryNotes)
}

const onIndexEntrySuccess = responseData => {
  $('.landing').show()
  $('.error').text('Successfully found entries!')
  // $('.message').text('')
  const showEntries = showEntriesTemplate({ entries: responseData.entries })
  $('.row').html(showEntries)
}

const onIndexEntryFailure = responseData => {
  $('.error').text('Could not report entry. Please try again')
}

const onFindEntrySuccess = responseData => {
  $('.landing').show()
  $('.error').text('Successfully found entry!')
  const entry = responseData.entry
  // console.log(entry)
  const entryDisplay = `
    Entry:
       Date: ${entry.date}
       Length of practice: ${entry.length_of_practice}
       Name of practice: ${entry.name_of_practice}
       Notes: ${entry.notes}
  `
  $('.message').text(entryDisplay)
  $('result').text(responseData)
}

const onFindEntryFailure = responseData => {
  $('.error').text('Could not find entry. Please try again')
  // console.log('Failure from ui, message: ', responseData)
}

const onPopulateEntryInModal = entryData => {
  $('#updateModal').modal('show')
  // console.log('entryData', entryData)
  clearModal()
  const entry = entryData
  store.update = {entry}
  // console.log('store.update', store.update)
  $('updateEntryDate').val(entryData.date)
  $('updateEntryLength').val(entryData.length_of_practice)
  $('updateEntryType').val(entryData.name_of_practice)
  $('updateEntryNotes').val(entryData.notes)
}

const onUpdateEntrySuccess = responseData => {
  $('.update-message').text('Successfully updated entry!').fadeOut(3000)
}

const onUpdateEntryFailure = responseData => {
  $('.update-message').text('Could not update entry. Please try again').fadeOut(3000)
  // console.log('Failure from ui, message: ', responseData)
}

const onDeleteEntrySuccess = responseData => {
  $('.update-message').text('Successfully deleted entry!')
  // console.log('Yay! from ui')
}

const onDeleteEntryFailure = responseData => {
  $('.update-message').text('Could not delete entry. Please try again')
  // console.log('Failure from ui, message: ', responseData)
}

module.exports = {
  clearModal,
  onCreateEntrySuccess,
  onCreateEntryFailure,
  populateUpdateForm,
  onIndexEntrySuccess,
  onIndexEntryFailure,
  onFindEntrySuccess,
  onFindEntryFailure,
  onPopulateEntryInModal,
  onUpdateEntrySuccess,
  onUpdateEntryFailure,
  onDeleteEntrySuccess,
  onDeleteEntryFailure
}
