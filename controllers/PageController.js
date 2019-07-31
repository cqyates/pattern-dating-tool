//this controller will run the db.create function
const db = require("../models");


module.exports = {
   setPage: function (body) {
    return db.Page.create(body)
   }
}