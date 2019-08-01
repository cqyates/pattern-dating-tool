//Configure Dotenv to hide Keys
require('dotenv').config();

//High Level Dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path")

// add CORS to our API to allow cross-origin requests. 
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 59077;

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Add routes, both API and view
const routes = require("./routes/apiRoutes");
app.use(routes);


// Connect to the Mongo DB 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://cqyates@gmail.com:Moonie!4411@ds359077.mlab.com:59077/heroku_chpp7971');

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});