const animals = require("../model/animallist");

exports.get = (req, res) => {
  animals((err, result) => {
    console.log({ animals });
    res.render("adopt", { activePage: { animals: true }, animals: result });
  });
};
