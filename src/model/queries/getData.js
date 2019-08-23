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

const getAdoptions = (userName, cb) => {
  dbConnection.query(
    "SELECT animals.name from animals INNER JOIN adoption ON animals.id = adoption.animal_id INNER JOIN users ON users.id = adoption.user_id WHERE users.name LIKE $1",
    [userName],
    (err, res) => {
      if (err) {
        cb(err);
      } else cb(null, res.rows);
    }
  );
};

module.exports = { getUsers, getAnimals, getAdoptions };
