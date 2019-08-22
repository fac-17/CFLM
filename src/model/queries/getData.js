const dbConnection = require("../database/db_connection");

const getUsers = cb => {
  dbConnection.query("SELECT name FROM users ORDER BY id", (err, res) => {
    if (err) {
      cb(err);
    } else cb(null, res.rows);
  });
};

const getAnimals = cb => {
  dbConnection.query("SELECT name FROM animals ORDER BY id", (err, res) => {
    if (err) {
      cb(err);
    } else cb(null, res.rows);
  });
};

const createUser = (userName, cb) => {
dbConnection.query("INSERT INTO users(name) VALUES ($1)", [userName], (err, res) => {
if (err) {
cb(err);
} else cb(null, res.rows);
});
};

module.exports = { getUsers, getAnimals, createUser};
