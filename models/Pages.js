const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pageSchema = new Schema({
        pageNumber: {
                type: Number,
                required: true
        },
        catalog: [{
                type: Schema.Types.ObjectId,
                ref: 'Catalog'
        }],
        patternNumberArray: [{
                type: Number,
                required: false
        }],
        imgURL: {
                type: String,
                required: true,
                unique: true,
        }
});

const Page = mongoose.model("Page", pageSchema);

module.exports = Page;