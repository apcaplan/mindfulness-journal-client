const store = require('../store')
const entryEvents = require('../entries/events.js')

const onSignUpSuccess = responseData => {
  $('.message').show()
  $('.message').text('Signup successful!').fadeOut(3000)
  $('form').trigger('reset')
}

const onSignUpFailure = responseData => {
  $('.message').show()
  $('.message').text('Couldn\'t register with this email and password. Please try again!').fadeOut(3000)
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  $('.message').show()
  $('.message').text('Logged in successfully!').fadeOut(3000)
  store.user = responseData.user
  store.user.id = responseData.user.id
  $('form').trigger('reset')
  $('#sign-in').hide()
  $('.main').show()
  $('.wrapper').show()
  $('body').css('background-image', "url('https://image.freepik.com/free-photo/sunshine-clouds-sky-during-morning-background-blue-white-pastel-heaven-soft-focus-lens-flare-sunlight-abstract-blurred-cyan-gradient-peaceful-nature-open-view-out-windows-beautiful-summer-spring_1253-1092.jpg')")
  entryEvents.buttonChangeShow()
}

const onSignInFailure = responseData => {
  $('.message').show()
  $('.message').text('Could not sign in. Please check email address and password, and try again - or create a new account.').fadeOut(3000)
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
  $('.message').show()
  $('.landing').hide()
  $('#update-entry-form').hide()
  $('.message').text('Have a peaceful day!').fadeOut(3000)
  $('.main').hide()
  setTimeout(() => $('.main-menu').show(), 3050)
  setTimeout(() => $('body').css('background-image', "url('https://pima.bibliocommons.com/events/uploads/images/full/d7b9f99051a59e56422ec1096ee6bfa2/health-mindfulness-meditation.jpg')"), 3050)
}

const onSignOutFailure = responseData => {
  $('.message').show()
  $('.message').text('Couldn\'t log out :(').fadeOut(3000)
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
