module.exports = db => ({
  async insert({ firstName, lastName, username, password, blogsCount }) {
    const statement =
      'INSERT INTO authors (first_name,last_name,username,password,blogs_count) VALUES ($1,$2,$3,$4,$5)';
    try {
      return await db.query(statement, [
        firstName,
        lastName,
        username,
        password,
        blogsCount,
      ]);
    } catch (error) {
      throw new Error(`#insert error : ${error}`);
    }
  },
  async readAll() {
    const statement = 'SELECT * FROM authors';
    try {
      const dbResponse = await db.query(statement);
      return dbResponse.rows;
    } catch (error) {
      throw new Error(`#read error: ${error}`);
    }
  },
  async readSingle(username) {
    const statement = 'SELECT * FROM authors WHERE username=$1';
    try {
      const response = await db.query(statement, [username]);
      return response.rows.at(0);
    } catch (error) {
      throw new Error(`#read single error: ${error}`);
    }
  },
  async delete(username) {
    const statement = 'DELETE FROM authors WHERE username=$1';
    try {
      db.query(statement, [username]);
    } catch (error) {
      throw new Error('#delete error');
    }
  },
  async update(username) {
    const statement = 'UPDATE authors WHERE username=$1';
    try {
      db.query(statement, [username]);
    } catch (error) {
      throw new Error('#update error');
    }
  },
});
