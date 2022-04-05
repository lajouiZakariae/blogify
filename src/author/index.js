const router = require('express').Router();
const {
  getSingleBlog,
  getBlogs,
  deleteBlog,
  postBlog,
} = require('../blog/blog.controller');
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

router.route('/:username/blogs').get(getBlogs).post(postBlog);
router.route('/:username/:slug').get(getSingleBlog).delete(deleteBlog).put();
module.exports = router;
