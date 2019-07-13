const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CatalogSchema = new Schema({
    company: {
        type: String,
        required: true,
        unique: false
    },
    season:{
        type: String,
        required: false
    },
    month:{
        type: String,
        required: false
    },
    year:{
        type: Number,
        required: true
    },
    imageCover: {
        type: String,
        required: true
    },
  

})

const Catalog = mongoose.model("Catalog", CatalogSchema);

module.exports = Catalog;
