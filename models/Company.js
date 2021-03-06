//Is my issue coming from Company vs companies vs Companies?

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

companySchema = new Schema({
	name: { 
        type: String, 
        required: true 
    },
    //FIXME Not sure if this is the best way to do this.  Not set up this way in seeds
	catalogs: [{ type: Schema.Types.ObjectId, ref: 'Catalog' }]
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
