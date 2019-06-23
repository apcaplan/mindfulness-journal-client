'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signup(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signin(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePw = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changepw(formData)
    .then(ui.onChangePwSuccess)
    .catch(ui.onChangePwFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signout()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// Back to register from Login
const backToReg = () => {
  $('#sign-in').hide()
  $('#sign-up').show()
}

// Login
const login = () => {
  $('.main-menu').hide()
  $('#sign-in').show()
}

// Return to main menu from Registration
const backToMainMenu = () => {
  $('#sign-up').hide()
  $('form').trigger('reset')
  $('.main-menu').show()
}

const register = () => {
  $('.main-menu').hide()
  $('form').trigger('reset')
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
