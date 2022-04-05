const makeDB = require('../database');
const Blog = require('./blog.model');

module.exports.getBlogs = async (req, res) => {
  const db = makeDB();
  const { status, payload } = await Blog.readAll(db, req.params.username);
  res.status(status).json(payload);
};

module.exports.postBlog = async (req, res) => {
  const db = makeDB();
  const { status, payload } = await Blog.insert(db, req.body);
  res.status(status).json(payload);
};

module.exports.getSingleBlog = async (req, res) => {
  const context = {
    username: req.params.username,
    slug: req.params.slug,
  };

  const db = makeDB();
  const { status, payload } = await Blog.readSingle(db, context);
  res.status(status).json(payload);
};

module.exports.deleteBlog = async (req, res) => {
  const context = {
    username: req.params.username,
    slug: req.params.slug,
  };

  const db = makeDB();

  const { status, payload } = await Blog.delete(db, context);
  res.status(status).json(payload);
};

module.exports.putBlog = async (req, res) => {
  const context = {
    username: req.params.username,
    slug: req.params.slug,
  };

  const db = makeDB();

  const { status, payload } = await Blog.update(db, context, req.body);
  res.status(status).json(payload);
};
