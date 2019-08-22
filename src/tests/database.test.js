const test = require("tape");
const runDbBuild = require("../model/database/build");
const queries = require("../model/queries");

test("Check table builds", t => {
  runDbBuild((err, res) => {
    t.error(err, "No error");
    t.end();
  });
});
