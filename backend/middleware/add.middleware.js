const { readFile, writeFile } = require('fs/promises');

const FILE = '../seed.json';
const CREATED = 201;

module.exports = async (req, res, _next) => {
  const { name, age, document, contact } = req.body;

  const file = await readFile(FILE, 'utf-8')
    .then((f) => JSON.parse(f));

  const obj = {
    id: (file.length + 1),
    name,
    age,
    document,
    contact,
    entry: {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    }
  };

  await writeFile(FILE, JSON.stringify([...file, obj]));

  return res.status(CREATED).json(obj);
};
