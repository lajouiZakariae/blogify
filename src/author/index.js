const router = require('express').Router();
const {
  getAuthors,
  postAuthor,
  getSingleAuthor,
  deleteSingleAuthor,
  putSingleAuthor,
} = require('./author.controller');

router.route('/').get(getAuthors).post(postAuthor);
router
  .route('/:username')
  .get(getSingleAuthor)
  .delete(deleteSingleAuthor)
  .put(putSingleAuthor);

module.exports = router;
