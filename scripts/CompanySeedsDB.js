const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Catalog collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/companyDB"
);

const companySeed = [
    {
        company: "Butterick"
    },
    {
        company: "McCall"
    },
    {
        company: "Simplicity"
    },
    {
        company: "Advance"
    },
    {
        company: "Anne Adams"
    },
    {
        company: "Marian Martin"
    },
    {
        company: "Fashion Service"
    },
    {
        company: "Excella"
    },
    {
        company: "Hollywood"
    },
    {
        company: "American Weekly"
    },
    {
        company: "Ladies Home Journal"
    },
    {
        company: "New York"
    },
    {
        company: "Pictorial Review"
    },
    {
        company: "Spadea"
    },
    {
        company: "Vogue"
    },
    {
        company: "Woman's Day"
    },
    {
        company: "Woman's World"
    },
    {
        company: "Superior"
    },
    {
        company: "Mail Order"
    }
]
db.Catalog
  .remove({})
  .then(() => db.Catalog.collection.insertMany(companySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


