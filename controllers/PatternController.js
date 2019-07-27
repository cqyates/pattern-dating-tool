const db = require("../models");

// Defining methods for the booksController
module.exports = {
   findByPatternNumber: function(query) {
        return db.Pattern
       .find({patternNumber: query}) 
       .populate("Page")
       .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json(err));
   }
}
