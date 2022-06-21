const server = require('./index')

const PORT = process.env.API_PORT || 3001;

server.listen(PORT, () => {
        console.log(`CRUD: People Registration app running on localhost:${PORT}`);
    }
);
