require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sharedsession = require('express-socket.io-session');
const sessionConfig = require('./sessionConfig');

const config = (app, io) => {
  // use
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // session
  app.use(cookieParser());
  const sessionMiddleware = session(sessionConfig);
  
  // Настраиваем сессии для экспресса
  app.use(sessionMiddleware);
  
  // Настраиваем сессии для socket.io
  io.use(sharedsession(sessionMiddleware, {
    autoSave: true,
  }));
};

module.exports = config;
