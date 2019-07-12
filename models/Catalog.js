const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CatalogSchema = new Schema({

    patternNumber: {
        type: Number,
        required: true,
        unique: false
    },
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
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }

})

const Catalog = mongoose.model("Catalog", CatalogSchema);

module.exports = Catalog;
