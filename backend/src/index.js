const express = require('express');
const bodyParser = require('body-parser');

const { loginRoute, personRoute } = require('./routes');

const myApp = express();
myApp.use(bodyParser.json());

myApp.use((_req, res, next) => {
    // para aceitar requisições de qualquer domínio (abrir as perna)
    // ex: 'localhost:3000' ou 'localhost:3000, localhost:3005'
    res.setHeader('access-control-allow-origin', '*');
    // define os métodos que eu posso usar
    // ex: "GET,POST,PUT,DELETE" ~> não funciona porque falta o OPTIONS
    res.setHeader('access-control-allow-methods', '*');
    // define que só pode acessar se tiver um header
    // ex "x-pao-com-ovo" ~> se não tiver da pau
    res.setHeader('access-control-allow-headers', '*');
    next();
});

const PORT = process.env.API_PORT || 3001;

// Rotas é legal manter em ordem alfabética pra evitar tretas
myApp.use('/login', loginRoute);
myApp.use('/people', personRoute);
myApp.get('/', (_res, res) => res.status(200).json({ msg: "Database is on" }));

myApp.listen(PORT, () => console.log(`CRUD: People Registration app running on Port:${PORT}`));
