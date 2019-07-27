const db = require("../models");

// Defining methods for the booksController
module.exports = {
   findByPatternNumber: function(query) {
       console.log(query)
        return db.Pattern
       .find({patternNumber: query}) 
    //    .populate("Page")
    
   }
}
