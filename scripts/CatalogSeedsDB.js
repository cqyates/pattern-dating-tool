const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Catalog collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/"
);

const catalogSeed = [
  {
    company: "Butterick",
    season: "Spring",
    year: "1936",
    imageCover: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/BUtterick-early-spring-1936-catalog-cover-6586.jpg",
  },
  {
    company: "Butterick",
    season: "Spring",
    year: "1935",
    imageCover: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-catalog-1935-covers--front-5982-6005.jpg",
  },
  {
    company: "Anne Adams",
    season: "Summer",
    year: "1949",
    imageCover: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/aa-1949-catalog-cover-4603.jpg",
  }

];

//FIXME Where does this get called?
db.Catalog
  .remove({})
  .then(() => db.Catalog.collection.insertMany(catalogSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
