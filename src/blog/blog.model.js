module.exports = class Blog {
  static async readAll(db) {
    try {
      const response = await db.query('SELECT * FROM blogs');
      return response.rows;
    } catch (error) {
      throw new Error(`readAll error: ${error}`);
    }
  }

  static async readSingle(db, slug) {
    const statement = 'SELECT * FROM blogs WHERE slug=$1';
    const response = await db.query(statement, [slug]);
    if (response.rowCount === 0) {
      return { msg: "blog doesn't exist" };
    }
    return response.rows.at(0);
  }

  static async insert(db, { title, body, author, slug }) {
    const statement =
      'INSERT INTO blogs (title,body,author,slug) VALUES ($1,$2,$3,$4)';
    const response = await db.query(statement, [title, body, author, slug]);
    return {
      status: 200,
      payload: response,
    };
  }

  static async delete(db, slug) {
    const statement = 'DELETE FROM blogs WHERE slug=$1';
    const response = await db.query(statement, [slug]);
    if (response.rowCount === 0) {
      return {
        status: 404,
        payload: 'Blog to delete not found',
      };
    }
    console.log(typeof response);
    return {
      status: 204,
      payload: null,
    };
  }
};
