module.exports = {
  async insert(db, { firstName, lastName, username, password, blogsCount }) {
    try {
      return await db.query(
        'INSERT INTO authors (first_name,last_name,username,password,blogs_count) VALUES ($1,$2,$3,$4,$5)',
        [firstName, lastName, username, password, blogsCount]
      );
    } catch (error) {
      throw new Error(`#insert error : ${error}`);
    }
  },
  async read(db) {
    try {
      const dbResponse = await db.query('SELECT * FROM authors');
      return dbResponse.rows;
    } catch (error) {
      throw new Error(`#read error: ${error}`);
    }
  },
};
