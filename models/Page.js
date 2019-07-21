const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pageSchema = new Schema({
        number: {
                type: Number,
                required: true
        },
        catalog: [{
                type: Schema.Types.ObjectId,
                ref: 'Catalog'
        }],
        patterns: [{
                type: Schema.Types.ObjectId,
                ref: 'Pattern'
        }],
        imgURL: {
                type: String,
                required: true,
                unique: true,
        }
});

const Page = mongoose.model("Page", pageSchema);

module.exports = Page;