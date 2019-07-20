const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Catalog collection and inserts the catalogs below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/pageDB"
);

const PageSeed = [
  {
    page: 1,
    catalog: //What goes here to tie this to correct catalog
    patternNumberArray [6586],
    imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/BUtterick-early-spring-1936-catalog-cover-6586.jpg"
  },
  {
    page: 2,
    catalog: //What goes here to tie this to correct catalog
    patternNumberArray: [6586, 5927],
    imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936-catalog+pg+2-6586-5927.jpg"
  },
  {
    page: 3,
    catalog: //What goes here to tie this to correct catalog
    patternNumberArray: [],
    imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick+Early-Spring-1936-catalog+pg-3-contents.jpg",
  },
  {
    page: 4,
    catalog: //What goes here to tie this to correct catalog
    patternNumberArray: [],
    imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936+catalog-pg-4-none.jpg",
  },
  {
    page: 5,
    catalog: //What goes here to tie this to correct catalog
    patternNumberArray: [],
    imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-early-spring-1936-catalog-pg-5-none.jpg",
  },
  {
    page: 6,
    catalog: //What goes here to tie this to correct catalog
    patternNumberArray: [6582, 6072, 6042, 6612],
    imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936+catalog-pg-6-6582-6872-6042-6612.jpg",
  },{
    page: 7,
    catalog: //What goes here to tie this to correct catalog
    patternNumberArray: [6577, 6594, 6548, 6621],
    imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-early-spring-1936-catalog-pg-7-6577-6594-6548-6621.jpg",
  },
  {
    page: 8,
    catalog: //What goes here to tie this to correct catalog
    patternNumberArray: [6570, 6552, 6534],
    imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936-catalog++pg-8-6570-6552-6534-.jpg",
  },
  {
    page: 9,
    catalog: //What goes here to tie this to correct catalog
    patternNumberArray: [6401],
    imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-early-spring-1936-catalog-pg+9+6401.jpg",
  },
  {
    page: 10,
    catalog: //What goes here to tie this to correct catalog
    patternNumberArray: [6579, 6546, 6497],
    imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936-catalog+pg-10-6579-6546-6497-.jpg",
  },
  {
    page: 11,
    catalog: //What goes here to tie this to correct catalog
    patternNumberArray: [6610, 6614, 6612],
    imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-early-spring-1936-catalog-pg+11-6610-6614-6612.jpg",
  }

];

//FIXME Where does this get called?
db.Catalog
  .remove({})
  .then(() => db.Catalog.collection.insertMany(pageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
