const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patternSchema = new Schema({
	patternNumber: { type: Number, required: true },
	catalogs: [{ type: Schema.Types.ObjectId, ref: 'Catalog' }]
});

const Pattern = mongoose.model("Pattern", patternSchema);

module.exports = Pattern;
