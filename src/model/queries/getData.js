const dbConnection = require("../database/db_connection");

const getUsers = cb => {
  dbConnection.query("SELECT name FROM users ORDER BY id", (err, res) => {
    if (err) {
      cb(err);
    } else cb(null, res.rows);
  });
};

const getAnimals = cb => {};

module.exports = { getUsers, getAnimals };
