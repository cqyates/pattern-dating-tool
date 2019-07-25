
const mongoose = require('mongoose');
const url = process.env.MONGODB_URI || "mongodb://localhost/CatalogDB";
const connect = mongoose.connect(url, {
    useNewUrlParser: true
});

module.exports = connect;

