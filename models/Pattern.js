const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PatternSchema = new Schema({
    company: {
        type: Schema.Types.ObjectId,
        ref: "Company"
    },
    patternNumber:{
        type: Number,
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