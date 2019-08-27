//link between database and adoption
const animalRequest = require("../model/queries/getData");

const animals = animalRequest.getAnimals;

exports.get = (req, res) => {
  animals((err, result) => {
    res.render("adopt", { activePage: { animals: true }, animals: result });
  });
};
