const { readFile } = require('fs/promises');

const FILE = './seed.json';
const OK = 200;

module.exports = async (req, res) => {
  const { q: search } = req.query;

  const file = await readFile(FILE, 'utf-8')
    .then((f) => JSON.parse(f));

  const searched = file.filter(({ name }) => name.includes(search));

  return res.status(OK).json(searched);
};

// Teste:
// localhost:3001/talker/search?q=Ren