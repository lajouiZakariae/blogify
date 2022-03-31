const router = require('express').Router();
const {
  getBlogs,
  postBlog,
  getSingleBlog,
  deleteBlog,
} = require('./blog.controller');

router.route('/').get(getBlogs).post(postBlog);
router.route('/:slug').get(getSingleBlog).delete(deleteBlog);

module.exports = router;
