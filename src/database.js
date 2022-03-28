require('dotenv').config();
const { Pool } = require('pg');

function makeDB() {
  const { HOSTNAME, USERNAME, DATABASE, PASSWORD, PORT } = process.env;
  return new Pool({
    user: USERNAME,
    host: HOSTNAME,
    password: PASSWORD,
    port: PORT,
    database: DATABASE,
  });
}

module.exports = makeDB;
