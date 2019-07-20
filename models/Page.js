const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PageSchema = new Schema({
    pageNumber: {
        type: Number,
        required: true,
        unique: false,
    },
    patternNumbeArray: {
        type: Array,
        required: true,
        unique: false,
    },
    catalog: {
       type: Schema.Types.ObjectId,
       ref: "Catalog"
    },
   

})

const Page = mongoose.model("Page", PageSchema);

module.exports = Page;