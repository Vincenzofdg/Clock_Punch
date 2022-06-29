const express = require('express');
const bodyParser = require('body-parser');

PORT = 3001
const { cors } = require('./utils')
const { loginRoute, personRoute } = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(cors);

// Rotas em ardem alfabética.
app.use('/login', loginRoute);
app.use('/people', personRoute);

app.get('/', (_res, res) => {
  return res.status(200).send('Developed by Vincenzo F. Di Giacomo');
});

app.listen(PORT, () => {
    console.log(`Application running on localhost:${PORT}`);
  }
);
