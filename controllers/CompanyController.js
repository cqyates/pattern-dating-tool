//FIXME issue 1 since I have 4 models and 4 controllers is the require statement set up correctly?
//FIXME issue 2 is the db.company set up correctly?  Do they need to match? Do they?
//FIXME issue 3 what argument gets passed inside find to get the entire list of companies?


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

//this gets called on the routes page as a get route.