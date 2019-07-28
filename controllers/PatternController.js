const db = require("../models");

// Defining methods for the PatternController
module.exports = {
   findByPatternNumber: function(query) {
      console.log(query)
      return db.Pattern
      .find({patternNumber: query}) 
      .populate("page", ['imgURL'])
    
   }
}
