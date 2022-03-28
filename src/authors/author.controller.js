const makeDB = require('../database');
const author = require('./author.model');
const { sanitize } = require('../helpers/sanitizers');
const { validate } = require('../helpers/validators');

async function postRequest({ body }) {
  const sanitizedAuthor = sanitize(body);
  const validatedAuthor = validate(sanitizedAuthor);

  const db = makeDB();
  await author.insert(db, validatedAuthor);
  return {
    status: 200,
    msg: `${body.firstName} Created Succefully`,
  };
}

async function postAuthor(req, res) {
  const { status, msg } = await postRequest({ body: req.body });
  res.status(status).json(msg);
}

function getAuthors(req, res) {
  res.send('Hi authors');
}

module.exports = {
  getAuthors,
  postAuthor,
};
