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
  $('.error').text('Successfully created new entry!')
}

const onCreateEntryFailure = responseData => {
  $('.error').text('Could not create entry. Please try again')
  console.log('Failure from ui, message: ', responseData)
}

const onIndexEntrySuccess = responseData => {
  $('.container').show()
  $('.error').text('Successfully found entries!')
  // $('.message').text('')
  console.log(responseData)
  const showEntries = showEntriesTemplate({ entries: responseData.entries })
  $('.container').html(showEntries)
}

const onIndexEntryFailure = responseData => {
  $('.error').text('Could not report entry. Please try again')
  console.log('Failure from ui, message: ', responseData)
}

const onFindEntrySuccess = responseData => {
  $('.container').show()
  $('.error').text('Successfully found entry!')
  const entry = responseData.entry
  console.log(entry)
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
  console.log('Failure from ui, message: ', responseData)
}

const onPopulateEntryInModal = entryData => {
  $('#updateModal').modal('show')
  console.log('entryData', entryData)
  clearModal()
  const entry = entryData
  store.update = {entry}
  console.log('store.update', store.update)
  $('updateEntryDate').val(entryData.date)
  $('updateEntryLength').val(entryData.length_of_practice)
  $('updateEntryType').val(entryData.name_of_practice)
  $('updateEntryNotes').val(entryData.notes)
}

const onUpdateEntrySuccess = responseData => {
  $('.change-pw-container').text('Successfully updated entry!')
  console.log('Yay! from ui')
}

const onUpdateEntryFailure = responseData => {
  $('.error').text('Could not update entry. Please try again')
  console.log('Failure from ui, message: ', responseData)
}

const onDeleteEntrySuccess = responseData => {
  $('.error').text('Successfully deleted entry!')
  console.log('Yay! from ui')
}

const onDeleteEntryFailure = responseData => {
  $('.error').text('Could not delete entry. Please try again')
  console.log('Failure from ui, message: ', responseData)
}

module.exports = {
  clearModal,
  onCreateEntrySuccess,
  onCreateEntryFailure,
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
