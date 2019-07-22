const mongoose = require("mongoose");
const Schema = mongoose.Schema;

companySchema = new Schema({
	name: { 
        type: String, 
        required: true 
    },
	catalogs: [{ type: Schema.Types.ObjectId, ref: 'Catalog' }]
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
