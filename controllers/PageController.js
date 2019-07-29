//this controller will run the db.create function
const db = require("../models");


module.exports = {
    postPage: function(req) {
       console.log(req.body)
       return db.Page
       .create({patternNumberArray: req.body.patternNumberArray, imgURL: filePath}) 
       .populate("catalog")
       //From this point how does the information flow through my different collections. 
       //Page has a reference to catalog which holds the details company (another reference), season and year

       //I also need to use a for loop to get through the pattern array and create an entry for each pattern number.

     
    },

  
 