//Configure Dotenv to hide Keys
require('dotenv').config();

//High Level Dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path")

// add CORS to our API to allow cross-origin requests. 
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// Add routes, both API and view
const routes = require("./routes/apiRoutes");
app.use(routes);


// Connect to the Mongo DB 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/CatalogDB');

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});