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

// Back to register from Login
const backToReg = () => {
  // $('.sign-in').get(0).reset()
  $('#sign-in').hide()
  $('#sign-up').show()
}

// Login
const login = () => {
  $('.main-menu').hide()
  $('#sign-in').show()
  // $('sign-up').hide()
}

// Return to main menu from Registration
const backToMainMenu = () => {
  $('#sign-up').hide()
  $('.main-menu').show()
}

const register = () => {
  $('.main-menu').hide()
  $('#sign-up').show()
}

const openingSettings = () => {
  $('.main').hide()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('.update-entry-form').hide()
  $('.wrapper').hide()
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePw)
  $('#sign-out').on('click', onSignOut)
  $('#register').on('click', register)
  $('.return').on('click', backToMainMenu)
  $('#login').on('click', login)
  $('.register2').on('click', backToReg)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut,
  openingSettings,
  addHandlers
}
