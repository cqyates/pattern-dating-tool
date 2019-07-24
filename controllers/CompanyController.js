//FIXME Does this have to drill down to ../models/companies
//what do I need to do in the routes file to call this? db.company.findAll?  or do I need to drill down in the set up
const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      db.Compnany
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}