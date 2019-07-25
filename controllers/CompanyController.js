const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function() {
   return db.Company.find({})
      
  }
}