const express = require('express'),
  app = express();
const authorsRouter = require('./author');
const blogsRouter = require('./blog');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/authors', authorsRouter);
app.use('/blogs', blogsRouter);

// eslint-disable-next-line no-console
app.listen(8080, () => console.log(`listening on port ${8080}`));
