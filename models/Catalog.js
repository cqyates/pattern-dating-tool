const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catalogSchema = new Schema({
	name: { 
        type: String, 
        required: true },
	year: { 
        type: Number, 
        required: true },
    season: { 
        type: String, 
        required: true },
	pages: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Page' }],
	company: { 
        type: Schema.Types.ObjectId, 
        ref: 'Company' }
});

const Catalog = mongoose.model("Catalog", catalogSchema);

module.exports = Catalog;
