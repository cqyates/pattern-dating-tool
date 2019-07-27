const db = require("../models");

// Defining methods for the booksController
module.exports = {
   findByPatternNumber: function(query) {
        return db.Pattern
       .find({patternNumber: {$regex: query}}) 
       .populate("Page")
   }
    // findAll: function(req, res) {
    //     db.Pattern
    //       .find(req.query)
    //       .sort({ date: -1 })
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    //   },
}
