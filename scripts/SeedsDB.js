const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/catalogDB"
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


const pageSeed = [
    {
        page: 1,
        catalog: "",
        patternNumberArray: [6586],
        imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/BUtterick-early-spring-1936-catalog-cover-6586.jpg"
    },
    {
        page: 2,
        catalog: "",
        patternNumberArray: [6586, 5927],
        imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936-catalog+pg+2-6586-5927.jpg"
    },
    {
        page: 3,
        catalog: "",
        patternNumberArray: [],
        imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick+Early-Spring-1936-catalog+pg-3-contents.jpg",
    },
    {
        page: 4,
        catalog: "",
        patternNumberArray: [],
        imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936+catalog-pg-4-none.jpg",
    },
    {
        page: 5,
        catalog: "",
        patternNumberArray: [],
        imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-early-spring-1936-catalog-pg-5-none.jpg",
    },
    {
        page: 6,
        catalog: "",
        patternNumberArray: [6582, 6072, 6042, 6612],
        imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936+catalog-pg-6-6582-6872-6042-6612.jpg",
    }, {
        page: 7,
        catalog: "",
        PatternNumberArray: [6577, 6594, 6548, 6621],
        imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-early-spring-1936-catalog-pg-7-6577-6594-6548-6621.jpg",
    },
    {
        page: 8,
        catalog: "",
        patternNumberArray: [6570, 6552, 6534],
        imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936-catalog++pg-8-6570-6552-6534-.jpg",
    },
    {
        page: 9,
        catalog: "",
        patternNumberArray: [6401],
        imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-early-spring-1936-catalog-pg+9+6401.jpg",
    },
    {
        page: 10,
        catalog: "",
        patternNumberArray: [6579, 6546, 6497],
        imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936-catalog+pg-10-6579-6546-6497-.jpg",
    },
    {
        page: 11,
        catalog: "",
        patternNumberArray: [6610, 6614, 6612],
        imgURL: "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-early-spring-1936-catalog-pg+11-6610-6614-6612.jpg",
    }

];

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
