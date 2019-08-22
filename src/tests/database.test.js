const test = require('tape');
const runDbBuild = require('../model/database/build');

test ('select all data from users table', (t) => {
  runDbBuild((err, res) => {
    t.error(err, 'No error');
  })
})
