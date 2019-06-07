const onSignUpSuccess = responseData => {
  $('.error').text('Signup successful!')
}

const onSignUpFailure = responseData => {
  $('.error').text('Couldn\'t register with this email and password. Please try again!')
}

const onSignInSuccess = responseData => {
  $('.error').text('Logged in successfully!')
}

const onSignInFailure = responseData => {
  $('.error').text('Could not sign in. Please check email address and password, and try again - or create a new account.')
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
