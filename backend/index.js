const express = require('express');
const bodyParser = require('body-parser');

const { people, login } = require('./routes');

const myApp = express();
myApp.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

// Rotas
myApp.get('/', (_request, response) => response.status(200).json({ msg: "Database is on" }));
myApp.use('/people', people);
myApp.use('/login', login);

myApp.listen(PORT, () => console.log(`CRUD: People Registration app running on Port:${PORT}`));
