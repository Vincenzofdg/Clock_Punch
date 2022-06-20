const express = require('express');

const personRoute = express.Router();

const {
  nameVerify: name,
  ageVerify: age,
  tokenVerify: token,
} = require('../validations');

const { getAll, getById, add, remove, search, edit } = require('../middleware');

const verify = [name, age];

personRoute
  .route('/search')
  .get(token, search);

personRoute
  .route('/:id')
  .get(getById)
  .put(token, verify, edit)
  .delete(token, remove);

personRoute
  .route('/')
  .get(getAll)
  .post(token, verify, add);

module.exports = { personRoute };