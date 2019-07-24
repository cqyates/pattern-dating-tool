const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catalogSchema = new Schema({
        company: {
                type: Schema.Types.ObjectId,
                ref: 'Company'
        },
        year: {
                type: Number,
                required: true
        },
        season: {
                type: String,
                required: true
        },
        pages: [{
                type: Schema.Types.ObjectId,
                ref: 'Page'
        }],
     
     
});

const Catalog = mongoose.model("Catalog", catalogSchema);

module.exports = Catalog;
