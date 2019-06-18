const store = require('../store')

const onSignUpSuccess = responseData => {
  $('.error').show()
  $('.error').text('Signup successful!').fadeOut(3000)
  $('form').trigger('reset')
}

const onSignUpFailure = responseData => {
  $('.error').show()
  $('.error').text('Couldn\'t register with this email and password. Please try again!').fadeOut(3000)
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  $('.error').show()
  $('.error').text('Logged in successfully!').fadeOut(3000)
  store.user = responseData.user
  store.user.id = responseData.user.id
  $('form').trigger('reset')
  $('#sign-in').hide()
  $('.main').show()
  $('.wrapper').show()
}

const onSignInFailure = responseData => {
  $('.error').show()
  $('.error').text('Could not sign in. Please check email address and password, and try again - or create a new account.').fadeOut(3000)
  $('form').trigger('reset')
}

const onChangePwSuccess = responseData => {
  $('.feedback').show()
  $('.feedback').text('Password changed.').fadeOut(2500)
  $('#change-password').trigger('reset')
  setTimeout(() => $('.feedback').text('Change password again?').fadeIn(2500), 2502)
}

const onChangePwFailure = responseData => {
  $('.feedback').show()
  $('.feedback').text('Failed to change password :(').fadeOut(2500)
  $('#change-password').trigger('reset')
  setTimeout(() => $('.feedback').text('Try again?').fadeIn(2500), 2502)
}

const onSignOutSuccess = responseData => {
  $('.error').show()
  $('.landing').hide()
  $('#update-entry-form').hide()
  $('.error').text('Have a peaceful day!').fadeOut(3000)
  $('.main').hide()
  setTimeout(() => $('.main-menu').show(), 3050)
}

const onSignOutFailure = responseData => {
  $('.error').show()
  $('.error').text('Couldn\'t log out :(').fadeOut(3000)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePwSuccess,
  onChangePwFailure,
  onSignOutSuccess,
  onSignOutFailure
}
