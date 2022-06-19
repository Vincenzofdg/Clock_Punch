const express = require('express');
const bodyParser = require('body-parser');

const { people, login } = require('./routes');

const app = express();
app.use(bodyParser.json());

const PORT = 3001 || process.env.PORT;

app.get('/', (_request, response) => response.status(200).json({ msg: "Database is on" }));

// Rotas
app.use('/people', people);
app.use('/login', login);

app.listen(PORT, () => {
  console.log(`CRUD: People Registration app running on Port:${PORT}`)
});