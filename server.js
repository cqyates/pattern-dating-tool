//Configure Dotenv to hide Keys
require('dotenv').config();

//High Level Dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path")


const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
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
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/CatalogDB'

mongoose.connect(MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true
}, () => {
  console.log('Mongo connection established')
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});