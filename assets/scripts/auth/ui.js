const store = require('../store')

const onSignUpSuccess = responseData => {
  $('.error').text('Signup successful!')
  console.log('Sign up success from ui, message: ', responseData)
}

const onSignUpFailure = responseData => {
  $('.error').text('Couldn\'t register with this email and password. Please try again!')
  console.log('Sign up failure from ui, message: ', responseData)
}

const onSignInSuccess = responseData => {
  console.log('Sign up success from ui, message: ', responseData)
  $('.error').text('Logged in successfully!')
  store.user = responseData.user
  store.user.id = responseData.user.id
  console.log('id: ', store.user.id)
}

const onSignInFailure = responseData => {
  $('.error').text('Could not sign in. Please check email address and password, and try again - or create a new account.')
  console.log('Sign up failure from ui, message: ', responseData)
  store.user.id = responseData.user.id
  console.log('id: ', store.user.id)
}

const onChangePwSuccess = responseData => {
  $('.error').text('password changed.')
}

const onChangePwFailure = responseData => {
  $('.error').text('Failed to change password :(')
}

const onSignOutSuccess = responseData => {
  $('.error').text('Have a peaceful day!')
}

const onSignOutFailure = responseData => {
  $('.error').text('Couldn\'t log out :(')
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
