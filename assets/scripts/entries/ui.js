const store = require('../store')

const onCreateEntrySuccess = responseData => {
  $('.error').text('Successfully created new entry!')
}

const onCreateEntryFailure = responseData => {
  $('.error').text('Could not create entry. Please try again')
  // console.log('Failure from ui, message: ', responseData)
}

const onIndexEntrySuccess = responseData => {
  $('.error').text('Successfully found entries!')
  $('.message').text('')
  responseData.entries.forEach(entry => {
    // const theEntry = responseData.entry
    // console.log(entry)
    const entryDisplay = `
      Entry:
        Date: ${entry.date}
        Length of practice: ${entry.length_of_practice}
        Name of practice: ${entry.name_of_practice}
        Notes: ${entry.notes}
    `
    $('.message').append(entryDisplay)
  })
  // $('.message').text(entryDisplay)
}

const onIndexEntryFailure = responseData => {
  $('.error').text('Could not report entry. Please try again')
  // console.log('Failure from ui, message: ', responseData)
}

const onFindEntrySuccess = responseData => {
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

const onUpdateEntrySuccess = responseData => {
  $('.error').text('Successfully updated entry!')
  // console.log('Yay! from ui')
}

const onUpdateEntryFailure = responseData => {
  $('.error').text('Could not update entry. Please try again')
  // console.log('Failure from ui, message: ', responseData)
}

const onDeleteEntrySuccess = responseData => {
  $('.error').text('Successfully deleted entry!')
  // console.log('Yay! from ui')
}

const onDeleteEntryFailure = responseData => {
  $('.error').text('Could not delete entry. Please try again')
  // console.log('Failure from ui, message: ', responseData)
}

module.exports = {
  onCreateEntrySuccess,
  onCreateEntryFailure,
  onIndexEntrySuccess,
  onIndexEntryFailure,
  onFindEntrySuccess,
  onFindEntryFailure,
  onUpdateEntrySuccess,
  onUpdateEntryFailure,
  onDeleteEntrySuccess,
  onDeleteEntryFailure
}
