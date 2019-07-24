//FIXME issue 1 since I have 4 models and 4 controllers is the require statement set up correctly?
//FIXME issue 2 is the db.company set up correctly?  Do they need to match? Do they?
//FIXME issue 3 what argument gets passed inside find to get the entire list of companies?
//FIXME issue 4 change format of this page to name the function and export at the bottom.


const db = require("../models/Company");

module.exports = {
    findAll: function(req, res) {
      db.Company
      //What goes inside the find?
        .find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}