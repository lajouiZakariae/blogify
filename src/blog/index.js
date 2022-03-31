const router = require('express').Router();
const { getBlogs, postBlog, singleBlog } = require('./blog.controller');

router.route('/').get(getBlogs).post(postBlog);
router.route('/:title').get(singleBlog);

module.exports = router;
