const makeDB = require('../database');
const author = require('./author.model');
const { sanitize } = require('../helpers/sanitizer');
const { validate } = require('../helpers/validator');

function postRequest({ body }) {
  const sanitizedAuthor = sanitize(body);
  const validatedAuthor = validate(sanitizedAuthor);

  const db = makeDB();
  author.insert(db, validatedAuthor);

  return {
    status: 200,
    msg: `${body.firstName} Created Succefully`,
  };
}

function postAuthor(req, res) {
  const { status, msg } = postRequest({ body: req.body });
  res.status(status).json(msg);
}

function getAuthors(req, res) {
  res.send('Hi authors');
}

module.exports = {
  getAuthors,
  postAuthor,
};
