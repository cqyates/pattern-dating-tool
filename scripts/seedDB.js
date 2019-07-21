//FIXME add seed information

const mongoose = require("mongoose");
const { Types: { ObjectId } } = mongoose;
const { Pattern, Company, Page, Catalog } = require("../models");

mongoose.connect(
	process.env.MONGODB_URI ||
	"mongodb://localhost/CatalogDB"
);


const companySeed = [
	{
		"_id": ObjectId("5d34e6f9c045a6f0625343fe"),
		"name": "Butterick"
	},
	{
		"_id": ObjectId("5d34e741c045a6f0625343ff"),
		"name": "McCall"
	},
	{
		"_id" : ObjectId("5d34e74ec045a6f062534400"),
		"name" : "Simplicity"
	},
	{
		"_id" : ObjectId("5d34e75bc045a6f062534401"),
		"name" : "Advance"
	},
	{
		"_id" : ObjectId("5d34e768c045a6f062534402"),
		"name" : "Hollywood"
	},
	{
		"_id" : ObjectId("5d34e773c045a6f062534403"),
		"name" : "Du Barry"
	},
	{
		"_id" : ObjectId("5d34e77dc045a6f062534404"),
		"name" : "New York"
	},
	{
		"_id" : ObjectId("5d34e788c045a6f062534405"),
		"name" : "Anne Adams"
	},
	{
		"_id" : ObjectId("5d34e791c045a6f062534406"),
		"name" : "Marian Martin"
	},
	{
		"_id" : ObjectId("5d34e79bc045a6f062534407"),
		"name" : "Excella"
	},
	{
		"_id" : ObjectId("5d34e7a6c045a6f062534408"),
		"name" : "Superior"
	},
	{
		"_id" : ObjectId("5d34e7eec045a6f062534409"),
		"name" : "Pictorial Review"
	},
	{
		"_id" : ObjectId("5d34e803c045a6f06253440a"),
		"name" : "Mail Order"
	},
	{
		"_id" : ObjectId("5d34e810c045a6f06253440b"),
		"name" : "Fashion Service"
	},
	{
		"_id" : ObjectId("5d34e859c045a6f06253440c"),
		"name" : "Ladies Home Journal"
	},
	{
		"_id" : ObjectId("5d34e87ac045a6f06253440d"),
		"name" : "Vogue"
	},

];

Company
	.remove({})
	.then(() => Company.collection.insertMany(companySeed))
	.then(data => {
		console.log(data.result.n + " companies inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});

const catalogSeed = [
	{
		"_id" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"company" : ObjectId("5d34e6f9c045a6f0625343fe"),
		"season" : "spring",
		"year" : 1936.0,
		"coverURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazåonaws.com/BUtterick-early-spring-1936-catalog-cover-6586.jpg"
	},
	{
		"_id" : ObjectId("5d34f0c41cf4dd26404271f0"),
		"company" : ObjectId("5d34e6f9c045a6f0625343fe"),
		"season" : "spring",
		"year" : 1935.0,
		"coverURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-catalog-1935-covers--front-5982-6005.jpg"
	},
	{
		"_id" : ObjectId("5d34f16f1cf4dd26404271f1"),
		"company" : ObjectId("5d34e788c045a6f062534405"),
		"season" : "summer",
		"year" : 1949.0,
		"coverURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/aa-1949-catalog-cover-4603.jpg"
	}
];

Catalog
	.remove({})
	.then(() => Catalog.collection.insertMany(catalogSeed))
	.then(data => {
		console.log(data.result.n + " catalogs inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});

const patternSeed = [
	{
		"_id": ObjectId("5d333333a9f82a7775e09666"),
		"name": "Pattern Name",
		"patternId": "12366"
	},
	{
		"_id": ObjectId("5d33370fa9f82a7775e09979"),
		"name": "Pattern Name 2",
		"patternId": "64237"
	},
	{
		"_id": ObjectId("5d333773a9f82a7775e099c5"),
		"name": "Pattern Name 3",
		"patternId": "55123"
	},
	{
		"_id": ObjectId("5d333796a9f82a7775e099ea"),
		"name": "Pattern Name 4",
		"patternId": "81375"
	}
];

Pattern
	.remove({})
	.then(() => Pattern.collection.insertMany(patternSeed))
	.then(data => {
		console.log(data.result.n + " patterns inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});


const pageSeed = [
	{
		"_id": ObjectId("5d3332fba9f82a7775e0964e"),
		"number": 1,
		"catalog": ObjectId("5d3332ada9f82a7775e0962c"),
		"patterns": [
			ObjectId("5d333333a9f82a7775e09666"),
			ObjectId("5d33370fa9f82a7775e09979")
		]
	},
	{
		"_id": ObjectId("5d33374ea9f82a7775e09995"),
		"number": 1,
		"catalog": ObjectId("9f3332ada9f82a7775e0962c"),
		"patterns": [
			ObjectId("5d333773a9f82a7775e099c5"),
			ObjectId("5d333796a9f82a7775e099ea")
		]
	}
];

Page
	.remove({})
	.then(() => Page.collection.insertMany(pageSeed))
	.then(data => {
		console.log(data.result.n + " pages inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
