const makeDB = require('../database');
const author = require('./author.model');
const { sanitize } = require('../helpers/sanitizers');
const { validate } = require('../helpers/validators');

async function getAuthors(_, res) {
  const db = makeDB();
  const authors = await author(db).readAll();
  res.json(authors);
}

async function postRequest({ body }) {
  const sanitizedAuthor = sanitize(body);
  const validatedAuthor = validate(sanitizedAuthor);

  const db = makeDB();
  await author(db).insert(validatedAuthor);
  return {
    status: 200,
    msg: `${body.firstName} Created Succefully`,
  };
}

async function postAuthor(req, res) {
  const { status, msg } = await postRequest({ body: req.body });
  res.status(status).json(msg);
}

async function getSingleAuthor(req, res) {
  const db = makeDB();
  const singleAuthor = await author(db).readSingle(req.params.username);
  res.json(singleAuthor);
}

async function deleteSingleAuthor(req, res) {
  const db = makeDB();
  await author(db).delete(req.params.username);
  res.status(200).send(`${req.params.username} deleted successfully`);
}

async function putSingleAuthor(req, res) {
  const db = makeDB();
  await author(db).update(req.params.id);
  res.status(200).send(`${req.params.username} deleted successfully`);
}

module.exports = {
  getAuthors,
  getSingleAuthor,
  postAuthor,
  deleteSingleAuthor,
  putSingleAuthor,
};
