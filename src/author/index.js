const router = require('express').Router();
const {
  getAuthors,
  postAuthor,
  getSingleAuthor,
  deleteAuthor,
  putAuthor,
} = require('./author.controller');

router.route('/').get(getAuthors).post(postAuthor);
router
  .route('/:username')
  .get(getSingleAuthor)
  .delete(deleteAuthor)
  .put(putAuthor);

module.exports = router;
