const makeDB = require('../database');
const Author = require('./author.model');
const { sanitize } = require('../helpers/sanitizers');
const { validate } = require('../helpers/validators');

module.exports.getAuthors = async (_, res) => {
  const db = makeDB();
  const authors = await Author.readAll(db);
  res.json(authors);
};

const postRequest = async ({ body }) => {
  const sanitizedAuthor = sanitize(body);
  const validatedAuthor = validate(sanitizedAuthor);

  const db = makeDB();
  await Author.insert(db, validatedAuthor);
  return {
    status: 200,
    msg: `${body.firstName} Created Succefully`,
  };
};

module.exports.postAuthor = async (req, res) => {
  const { status, msg } = await postRequest({ body: req.body });
  res.status(status).json(msg);
};

module.exports.getSingleAuthor = async (req, res) => {
  const db = makeDB();
  const singleAuthor = await Author.readSingle(db, req.params.username);
  res.json(singleAuthor);
};

module.exports.deleteAuthor = async (req, res) => {
  const db = makeDB();
  await Author.delete(db, req.params.username);
  res.status(200).send(`${req.params.username} deleted successfully`);
};

module.exports.putAuthor = async (req, res) => {
  const db = makeDB();
  await Author.update(db, req.params.id);
  res.status(200).send(`${req.params.username} deleted successfully`);
};
