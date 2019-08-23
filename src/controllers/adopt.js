const animals = require("../model/animallist");

exports.get = (req, res) => {
  console.log({ animals });
  animals((err, result) => {
    console.log("Result: ", result);
    res.render("adopt", { activePage: { animals: true }, animals: result });
  });
};
