const store = require('../store')

const onCreateEntrySuccess = responseData => {
  $('.error').text('Successfully created new entry!')
  console.log('Yay! from ui')
}

const onCreateEntryFailure = responseData => {
  $('.error').text('Could not create entry. Please try again')
  console.log('Failure from ui, message: ', responseData)
}

const onFindEntrySuccess = responseData => {
  $('.error').text('Successfully found entry!')
  console.log('Yay! from ui')
  $('result').text(responseData)
}

const onFindEntryFailure = responseData => {
  $('.error').text('Could not find entry. Please try again')
  console.log('Failure from ui, message: ', responseData)
}

const onUpdateEntrySuccess = responseData => {
  $('.error').text('Successfully updated entry!')
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
  onCreateEntrySuccess,
  onCreateEntryFailure,
  onFindEntrySuccess,
  onFindEntryFailure,
  onUpdateEntrySuccess,
  onUpdateEntryFailure,
  onDeleteEntrySuccess,
  onDeleteEntryFailure
}
