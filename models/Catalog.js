const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CatalogSchema = new Schema({
    company: {
        type: Schema.Types.ObjectId,
        ref: "Company"
    },
    season:{
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
