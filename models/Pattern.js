//Need to Finish this one.

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PatternSchema = new Schema({
    company: {
        type: Schema.Types.ObjectId,
        ref: "Company"
    },
    patternNumber:{
        type: Number,
        required: true,
    },
 
})

const Pattern = mongoose.model("Pattern", PatternSchema);

module.exports = Pattern;