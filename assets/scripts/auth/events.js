'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = event => {
  event.preventDefault()
  // console.log('Hello from Events! Sign up from events is:', event)
  const form = event.target
  const formData = getFormFields(form)
  // console.log('formData', formData)
  api.signup(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  // console.log('Hello from Events! Sign in from events is:', event)
  const form = event.target
  const formData = getFormFields(form)
  // console.log('formData', formData)
  api.signin(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePw = event => {
  event.preventDefault()
  // console.log('Hello from Events! ChangePW from events is:', event)
  const form = event.target
  const formData = getFormFields(form)
  // console.log('formData', formData)
  api.changepw(formData)
    .then(ui.onChangePwSuccess)
    .catch(ui.onChangePwFailure)
}

const onSignOut = event => {
  event.preventDefault()
  // console.log('Hello from Events!')
  api.signout()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut
}
