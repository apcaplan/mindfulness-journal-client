'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = event => {
  event.preventDefault()
  console.log('Hello from Events!')
  const form = event.target
  const formData = getFormFields(form)
  api.signup(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  console.log('Hello from Events!')
  const form = event.target
  const formData = getFormFields(form)
  api.signin(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePw = event => {
  event.preventDefault()
  console.log('Hello from Events!')
  const form = event.target
  const formData = getFormFields(form)
  api.changepw(formData)
    .then(ui.onChangePwSuccess)
    .catch(ui.onChangePwFailure)
}

const onLogout = event => {
  event.preventDefault()
  console.log('Hello from Events!')
  api.signout()
    .then(ui.onLogoutSuccess)
    .catch(ui.onLogoutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onLogout
}
