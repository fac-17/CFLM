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
    t.error(err, "No error");
    queries.getData.getUsers((err, data) => {
      t.deepEqual(users, data, "Correct names are returned");
    });
    t.end();
  });
});
