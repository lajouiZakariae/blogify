const router = require('express').Router();
const {
  getAuthors,
  postAuthor,
  getSingleAuthor,
} = require('./author.controller');

router.route('/').get(getAuthors).post(postAuthor);
router.route('/:username').get(getSingleAuthor);

module.exports = router;
