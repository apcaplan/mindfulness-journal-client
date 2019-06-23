
const showEntriesTemplate = require('../templates/entry-listing.handlebars')
const store = require('../store')

// Clear modal
const clearModal = () => {
  $('updateEntryDate').val('')
  $('updateEntryLength').val('')
  $('updateEntryType').val('')
  $('updateEntryNotes').val('')
}

// Successfully create new entry
const onCreateEntrySuccess = responseData => {
  $('.cp').text('Successfully created new entry!').fadeOut(2500)
  $('#create-entry').trigger('reset')
  setTimeout(() => $('.cp').text('Create another new entry?').fadeIn(2500), 2500)
}

// Problem creating new entry
const onCreateEntryFailure = responseData => {
  $('.cp').text('Could not create entry').fadeOut(2500)
  setTimeout(() => $('.cp').text('Try again?').fadeIn(2500), 2500)
}

// Fill update form with data
const populateUpdateForm = event => {
  $('.date-edit').val(store.entryDate)
  $('.length-edit').val(store.entryLength)
  $('.practice-edit').val(store.entryPractice)
  $('.notes-edit').val(store.entryNotes)
}

// "Show entries" response when no entries
const onIndexEmpty = response => {
  $('.landing').text('')
  $('.index-message').show()
  $('.index-message').text('Your journal is empty.').fadeOut(4000)
  $('#hide-entries').addClass('d-none')
  $('#index').removeClass('d-none')
}

// "Show entries" / entries index
const onIndexEntrySuccess = responseData => {
  $('.landing').show()
  const showEntries = showEntriesTemplate({ entries: responseData.entries })
  if (showEntries.length === 0) {
    onIndexEmpty()
  } else {
    $('.landing').html(showEntries)
  }
}

// Problem executing "show entries"
const onIndexEntryFailure = responseData => {
  $('.message').text('Could not report entry. Please try again')
}

// const onFindEntrySuccess = responseData => {
//   $('.landing').show()
//   $('.message').text('Successfully found entry!')
//   const entry = responseData.entry
//   const entryDisplay = `
//     Entry:
//        Date: ${entry.date}
//        Length of practice: ${entry.length_of_practice}
//        Name of practice: ${entry.name_of_practice}
//        Notes: ${entry.notes}
//   `
//   $('.message').text(entryDisplay)
//   $('result').text(responseData)
// }

// const onFindEntryFailure = responseData => {
//   $('.message').text('Could not find entry. Please try again')
// }

//
// const onPopulateEntryInModal = entryData => {
//   $('#updateModal').modal('show')
//   clearModal()
//   const entry = entryData
//   store.update = {entry}
//   $('updateEntryDate').val(entryData.date)
//   $('updateEntryLength').val(entryData.length_of_practice)
//   $('updateEntryType').val(entryData.name_of_practice)
//   $('updateEntryNotes').val(entryData.notes)
// }

// Update entry successfully
const onUpdateEntrySuccess = responseData => {
  $('.update-message').text('Successfully updated entry!').fadeOut(3000)
}

// Problem updating entry
const onUpdateEntryFailure = responseData => {
  $('.update-message').text('Could not update entry. Please try again').fadeOut(3000)
}

// Delete entry successfully
const onDeleteEntrySuccess = responseData => {
  $('.delete-message').text('Successfully deleted entry!')
}

// Problem deleting entry
const onDeleteEntryFailure = responseData => {
  $('.delete-message').text('Could not delete entry. Please try again')
}

module.exports = {
  clearModal,
  onCreateEntrySuccess,
  onCreateEntryFailure,
  populateUpdateForm,
  onIndexEmpty,
  onIndexEntrySuccess,
  onIndexEntryFailure,
  // onFindEntrySuccess,
  // onFindEntryFailure,
  // onPopulateEntryInModal,
  onUpdateEntrySuccess,
  onUpdateEntryFailure,
  onDeleteEntrySuccess,
  onDeleteEntryFailure
}
