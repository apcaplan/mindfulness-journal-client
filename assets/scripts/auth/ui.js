const onSignUpSuccess = responseData => {
  $('.error').text('Signup successful!')
}

const onSignUpFailure = responseData => {
  $('.error').text('Couldn\'t register with this email and password. Please try again!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
