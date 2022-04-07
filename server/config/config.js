require('dotenv').config();
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const sessionConfig = require('./sessionConfig')

const config = (app) => {
  // set
  app.set('view engine', 'hbs')


  // use
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))


  // session
  app.use(cookieParser())
  app.use(session(sessionConfig))
}

module.exports = config
