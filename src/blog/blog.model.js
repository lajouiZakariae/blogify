module.exports = db => ({
  async readAll() {
    try {
      const response = await db.query('SELECT * FROM blogs');
      return response.rows;
    } catch (error) {
      throw new Error(`readAll error: ${error}`);
    }
  },
  async read(title) {
    const statement = 'SELECT * FROM blogs WHERE title=$1';
    const response = await db.query(statement, [title]);
    return response.rows;
  },
  async insert({ title, body, author }) {
    const statement = 'INSERT INTO blogs (title,body,author) VALUES ($1,$2,$3)';
    const response = await db.query(statement, [title, body, author]);
    return response;
  },
  async delete(title) {
    const statement = 'DELETE FROM blogs WHERE title=$1';
    const response = await db.query(statement, [title]);
    return response;
  },
});
