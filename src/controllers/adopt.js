//link between database and adoption
const animalRequest = require("../model/queries/getData");

const animals = animalRequest.getAnimals;

exports.get = (req, res) => {
  console.log({ animals });
  animals((err, result) => {
    console.log("Result: ", result);
    res.render("adopt", { activePage: { animals: true }, animals: result });
  });
};
