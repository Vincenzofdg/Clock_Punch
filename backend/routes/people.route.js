const express = require('express');

const Router = express.Router();

const { 
  nameVerify: name,
  ageVerify: age,
  tokenVerify: token,
  searchTermVerify: searchTerm,
} = require('../validations');

const { getAll, getById, add, remove, search, edit } = require('../middleware');

const verify = [name, age];

Router
  .route('/search')
    .get(token, searchTerm, search);

Router
  .route('/')
    .get(getAll)
    .post(token, verify, add);

Router
  .route('/:id')
    .get(getById)
    .put(token, verify, edit)
    .delete(token, remove);

module.exports = Router;