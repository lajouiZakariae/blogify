const router = require('express').Router();
const {
  getBlogs,
  postBlog,
  getSingleBlog,
  deleteBlog,
} = require('./blog.controller');

router.route('/blogs').get(getBlogs).post(postBlog);

router
  .route('/:slug')
  .get(getSingleBlog)
  .delete(deleteBlog)
  .put(() => {});

module.exports = router;
