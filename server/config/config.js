require('dotenv').config();
const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const sessionConfig = require('./sessionConfig')

const config = (app) => {
  // set

  // use
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  // session
  app.use(cookieParser())
  app.use(session(sessionConfig))

}

module.exports = config
