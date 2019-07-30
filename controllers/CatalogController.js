//this controller will run the db.create function
const db = require("../models");


module.exports = {
    setCatalog: function(body) {
       return db.Catalog.create(body)
    }
 }