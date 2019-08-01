
const mongoose = require('mongoose');
const url = process.env.MONGODB_URI || "mongodb://cqyates@gmail.com:Moonie!4411@ds359077.mlab.com:59077/heroku_chpp7971";
const connect = mongoose.connect(url, {
    useNewUrlParser: true
});

module.exports = connect;

