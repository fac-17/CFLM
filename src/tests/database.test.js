const test = require("tape");
const runDbBuild = require("../model/database/build");
const queries = require("../model/queries");

test("Check table builds", t => {
  runDbBuild((err, res) => {
    t.error(err, "No error");
    t.end();
  });
});

test("Check getUsers function", t => {
  const users = [
    { name: "Gregor" },
    { name: "Andy" },
    { name: "Francesca" },
    { name: "Jack" }
  ];
  runDbBuild((err, res) => {
    t.error(err, "No error for DbBuild");
    queries.getData.getUsers((err, data) => {
      t.error(err, "No error for getUsers");
      t.deepEqual(users, data, "Correct names are returned");
      t.end();
    });
  });
});

test("Check getAnimals function", t => {
  const animals = [
    { name: "Pig" },
    { name: "Goat" },
    { name: "Tiger" },
    { name: "Monkey" }
  ];

  runDbBuild((err, res) => {
    t.error(err, "No error for DbBuild");
    queries.getData.getAnimals((err, data) => {
      t.error(err, "No error for getAnimals");
      t.deepEqual(animals, data, "Correct animals are returned");
      t.end();
    });
  });
});

test("Check return all adopted relationships", t => {
  const adoptions = "tbd";

  runDbBuild((err, res) => {
    t.error(err, "No error for DbBuild");
    queries.getData.getAdoptions((err, data) => {
      t.error(err, "No error for getAdoptions");
      t.deepEqual(adoptions, data, "Correct adoptions are returned");
      t.end();
    });
  });
});
