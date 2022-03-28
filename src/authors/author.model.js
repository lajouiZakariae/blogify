module.exports = {
  insert(db, { firstName, lastName, username, password, blogsCount }) {
    return db.query(
      'INSERT INTO authors (first_name,last_name,username,password,blogs_count) VALUES ($1,$2,$3,$4,$5)',
      [firstName, lastName, username, password, blogsCount]
    );
  },
};
