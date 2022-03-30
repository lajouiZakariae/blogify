const express = require('express'),
  app = express();
const authorsRouter = require('./authors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/authors', authorsRouter);
// eslint-disable-next-line no-console
app.listen(8080, () => console.log(`listening on port ${8080}`));
