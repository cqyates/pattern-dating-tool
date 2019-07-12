const express = require("express");
const mongoose = require("moongoose");
const app = express();

const PORT = 3001;

// add mongoose.connection once npm build has been run

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });