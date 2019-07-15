const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PatternImageSchema = new Schema({
    patternNumber: {
        type: Number,
        required: true,
        unique: false,
        min: 4,
        max: 4
    },
    catalog: {
       type: Schema.Types.ObjectId,
       ref: "catalog"
    },
    pageNumber: {
        type: Number,
        required: true,
        unique: false,
    }

})

const PatternImage = mongoose.model("PatternImages", PatternImageSchema);

module.exports = PatternImage;