const express = require('express');

const loginRoute = express.Router();

const { newLogin } = require('../middleware');

loginRoute
  .route('/')
  .post(newLogin);

module.exports = { loginRoute };