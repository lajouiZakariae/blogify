const makeDB = require('../database');
const Author = require('./author.model');
const { sanitize } = require('../helpers/sanitizers');
const { validate } = require('../helpers/validators');

module.exports.getAuthors = async (_, res) => {
  const db = makeDB();
  const { status, payload } = await Author.readAll(db);
  res.status(status).json(payload);
};

const postRequest = async ({ body }) => {
  const sanitizedAuthor = sanitize(body);
  const validatedAuthor = validate(sanitizedAuthor);

  const db = makeDB();
  await Author.insert(db, validatedAuthor);
  return {
    status: 200,
    payload: `${body.firstName} Created Succefully`,
  };
};

module.exports.postAuthor = async (req, res) => {
  const { status, payload } = await postRequest({ body: req.body });
  res.status(status).json(payload);
};

module.exports.getSingleAuthor = async (req, res) => {
  const db = makeDB();
  const { status, payload } = await Author.readSingle(db, req.params.username);
  res.status(status).json(payload);
};

module.exports.deleteAuthor = async (req, res) => {
  const db = makeDB();
  const { status, payload } = await Author.delete(db, req.params.username);
  res.status(status).send(payload);
};

module.exports.putAuthor = async (req, res) => {
  const db = makeDB();
  console.log(db, req, res);
};
