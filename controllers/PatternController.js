const db = require("../models");

// Defining methods for the booksController
module.exports = {
   findByPatternNumber: function(req, res) {
        return db.Pattern
       .find(req.query) 
       .populate("Page")
       .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json(err));
   }
    // findAll: function(req, res) {
    //     db.Pattern
    //       .find(req.query)
    //       .sort({ date: -1 })
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   },
}
