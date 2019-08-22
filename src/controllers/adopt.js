const animals = require('../model/animallist')
     
;
exports.get = (req, res) => {
    res.render('adopt', { activePage: { animals: true }, animals });
};
