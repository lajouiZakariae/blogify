module.exports = class Author {
  static async readAll(db) {
    const statement = 'SELECT * FROM authors';
    try {
      const dbResponse = await db.query(statement);
      return { status: 200, payload: dbResponse.rows };
    } catch (error) {
      throw new Error(`#read error: ${error}`);
    }
  }

  static async readSingle(db, username) {
    const statement = 'SELECT * FROM authors WHERE username=$1';
    try {
      const response = await db.query(statement, [username]);
      if (response.rowCount === 0) {
        return { status: 404, payload: "author doesn't exist" };
      }
      return { status: 200, payload: response.rows.at(0) };
    } catch (error) {
      throw new Error(`#read single error: ${error}`);
    }
  }

  static async insert(
    db,
    { firstName, lastName, username, password, blogsCount }
  ) {
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
  }

  static async delete(db, username) {
    const statement = 'DELETE FROM authors WHERE username=$1';
    try {
      const response = await db.query(statement, [username]);
      if (response.rowCount === 0) {
        return { status: 404, payload: 'author to delete not found' };
      }
      return { status: 204, payload: null };
    } catch (error) {
      throw new Error('#delete error');
    }
  }

  static async update(db, username) {
    const statement = 'UPDATE authors WHERE username=$1';
    try {
      await db.query(statement, [username]);
    } catch (error) {
      throw new Error('#update error');
    }
  }
};
