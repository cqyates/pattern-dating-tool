//this controller will run the db.create function
const db = require("../models");


module.exports = {
   postPage: function (req, res) {
      db.Page.create(req.body)
         .then(page => res.json(page))
         .catch(err => res.status(422).json(err));
   }
}