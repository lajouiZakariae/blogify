const makeDB = require('../database');
const Blog = require('./blog.model');

module.exports.getBlogs = async (req, res) => {
  const db = makeDB();
  const data = await Blog.readAll(db);
  res.json(data);
};

module.exports.getSingleBlog = async (req, res) => {
  const db = makeDB();
  const data = await Blog.readSingle(db, req.params.slug);
  res.json(data);
};

module.exports.postBlog = async (req, res) => {
  const db = makeDB();
  const { status, payload } = await Blog.insert(db, req.body);
  res.status(status).json(payload);
};

module.exports.deleteBlog = async (req, res) => {
  const db = makeDB();
  const { status, payload } = await Blog.delete(db, req.params.slug);
  res.status(status).json(payload);
};
