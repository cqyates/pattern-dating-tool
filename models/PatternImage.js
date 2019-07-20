const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PatternImageSchema = new Schema({
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
       ref: "catalog"
    },
   

})

const PatternImage = mongoose.model("PatternImages", PatternImageSchema);

module.exports = PatternImage;