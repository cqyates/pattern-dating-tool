const db = require("../models");

module.exports = {
  findAll: function() {
   return db.Company.find({})
      
  }
}