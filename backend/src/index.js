const express = require('express');
const bodyParser = require('body-parser');

const { cors } = require('./utils')
const { loginRoute, personRoute } = require('./routes');

const myApp = express();

myApp.use(bodyParser.json());
myApp.use(cors());

const PORT = process.env.API_PORT || 3001;

// Rotas em ardem alfabética
myApp.use('/login', loginRoute);
myApp.use('/people', personRoute);
myApp.get('/', (_res, res) => res.status(200).json({ msg: "Database is on" }));

myApp.listen(PORT, () => console.log(`CRUD: People Registration app running on Port:${PORT}`));
