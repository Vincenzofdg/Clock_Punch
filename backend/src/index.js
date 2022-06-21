const express = require('express');
const bodyParser = require('body-parser');

const { cors } = require('./utils')
const { loginRoute, personRoute } = require('./routes');

const myApp = express();

myApp.use(bodyParser.json());
myApp.use(cors());

// Rotas em ardem alfabética.
myApp.use('/login', loginRoute);
myApp.use('/people', personRoute);
myApp.get('/', (_res, res) => res.status(200).json({ msg: "Database is on" }));

module.exports = myApp;
