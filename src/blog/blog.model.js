module.exports = class Blog {
  static async readAll(db, { username }) {
    const statement =
      'SELECT * FROM blogs INNER JOIN authors ON authors.username=$1';
    const response = await db.query(statement, [username]);

    if (response.rowCount === 0) {
      return {
        status: 200,
        payload: `${username} has no blogs`,
      };
    }
    return {
      status: 200,
      payload: response.rows,
    };
  }

  static async readSingle(db, { username, slug }) {
    const statement =
      'SELECT * FROM blogs INNER JOIN authors ON authors.username=$1 AND blogs.slug=$2';
    const response = await db.query(statement, [username, slug]);

    if (response.rowCount === 0) {
      return {
        status: 404,
        payload: 'Not found!',
      };
    }
    return {
      status: 200,
      payload: response.rows.at(0),
    };
  }

  static async update() {
    return 1;
  }

  static async delete(db, { username, slug }) {
    const statement = '';
    const response = await db.query(statement, [username, slug]);

    if (response.rowCount === 0) {
      return {
        status: 404,
        payload: `${username} not Found`,
      };
    }
    return {
      status: 201,
      payload: `${username} deleted succeffully`,
    };
  }
};
