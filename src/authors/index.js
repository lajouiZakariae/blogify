const router = require('express').Router();
const { getAuthors, postAuthor } = require('./author.controller');

router.route('/').get(getAuthors).post(postAuthor);

module.exports = router;
