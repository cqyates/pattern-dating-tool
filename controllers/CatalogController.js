//this controller will run the db.create function
const db = require("../models");


module.exports = {
   setCatalog: function (req) {
      db.Catalog.create(req.body)
         .then(catalog => res.json(catalog))
         .catch(err => res.status(422).json(err));
   }
}