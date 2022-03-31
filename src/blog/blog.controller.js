const makeDB = require('../database');
const blog = require('./blog.model');

async function getBlogs(req, res) {
  const db = makeDB();
  const data = await blog(db).readAll();
  res.json(data);
}

async function getRequestHandler(title, action) {
  const db = makeDB();
  switch (action) {
    case 'delete':
      return {
        status: 200,
        payload: 'delete',
      };
    case 'update':
      return {
        status: 200,
        payload: 'update',
      };
    default:
      blog(db).read();
      return {
        status: 200,
        payload: 'read only',
      };
  }
}

async function postBlog(req, res) {
  const db = makeDB();
  const response = await blog(db).insert(req.body);
  res.status(200).json(response);
}

async function singleBlog(req, res) {
  const { status, payload } = await getRequestHandler(
    req.params.title,
    req.query.action
  );
  res.status(status).json(payload);
}

module.exports = {
  getBlogs,
  postBlog,
  singleBlog,
};
