//FIXME Have Dustin look over this.  

const mongoose = require("mongoose");
const { Types: { ObjectId } } = mongoose;
const { Pattern, Company, Page, Catalog } = require("../models");

mongoose.connect(
	process.env.MONGODB_URI ||
	"mongodb://cqyates@gmail.com:Moonie!4411@ds359077.mlab.com:59077/heroku_chpp7971"
);


const companySeed = [
	{
		"_id": ObjectId("5d34e6f9c045a6f0625343fe"),
		"name": "Butterick",
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
		"_id" : ObjectId("5d34e79bc045a6f062534407"),
		"name" : "Excella"
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
		"_id" : ObjectId("5d34e859c045a6f06253440c"),
		"name" : "Ladies Home Journal"
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
	},
	{
		"_id" : ObjectId("5d34f0c41cf4dd26404271f0"),
		"company" : ObjectId("5d34e6f9c045a6f0625343fe"),
		"season" : "spring",
		"year" : 1935.0,
	},
	{
		"_id" : ObjectId("5d34f16f1cf4dd26404271f1"),
		"company" : ObjectId("5d34e788c045a6f062534405"),
		"season" : "summer",
		"year" : 1949.0,
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
// _id references the Mongo db generated id
// patternNumber is the name assigned for the input
const patternSeed = [
	{
		"_id" : ObjectId("5d378f3690719079bec9abcf"),
		"patternNumber" : 6585.0,
		"page" : ObjectId("5d376cdf90719079bec9abba")
	},
	{
		"_id" : ObjectId("5d378f8590719079bec9abd0"),
		"patternNumber" : 6543.0,
		"page" : ObjectId("5d376d8c90719079bec9abbb")
	},
	{
		"_id" : ObjectId("5d378ff690719079bec9abd1"),
		"patternNumber" : 6586.0,
		"page" : ObjectId("5d376df790719079bec9abbc")
	},
	{
		"_id" : ObjectId("5d37902690719079bec9abd2"),
		"patternNumber" : 5927.0,
		"page" : ObjectId("5d376df790719079bec9abbc")
	},
	{
		"_id" : ObjectId("5d3790f090719079bec9abd3"),
		"patternNumber" : 6582.0,
		"page" : ObjectId("5d376f9290719079bec9abc0")
	},
	{
		"_id" : ObjectId("5d37918790719079bec9abd4"),
		"patternNumber" : 6872.0,
		"page" : ObjectId("5d376f9290719079bec9abc0")
	},
	{
		"_id" : ObjectId("5d3791b590719079bec9abd5"),
		"patternNumber" : 6042.0,
		"page" : ObjectId("5d376f9290719079bec9abc0")
	},
	{
		"_id" : ObjectId("5d3791e890719079bec9abd6"),
		"patternNumber" : 6612.0,
		"page" : ObjectId("5d376f9290719079bec9abc0")
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
		"_id" : ObjectId("5d376cdf90719079bec9abba"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [ 
			6586.0
		],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/BUtterick-early-spring-1936-catalog-cover-6586.jpg"
	},
	{
		"_id" : ObjectId("5d376d8c90719079bec9abbb"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [ 
			6543.0
		],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-early-spring-1936-catalog-pg-1-6543.jpg"
	},
	{
		"_id" : ObjectId("5d376df790719079bec9abbc"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [ 
			6586.0, 
			5927.0
		],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936-catalog+pg+2-6586-5927.jpg"
	},
	{
		"_id" : ObjectId("5d376e3c90719079bec9abbd"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick+Early-Spring-1936-catalog+pg-3-contents.jpg"
	},
	{
		"_id" : ObjectId("5d376eb390719079bec9abbe"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936+catalog-pg-4-none.jpg"
	},
	{
		"_id" : ObjectId("5d376f0690719079bec9abbf"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-early-spring-1936-catalog-pg-5-none.jpg"
	},
	{
		"_id" : ObjectId("5d376f9290719079bec9abc0"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [ 
			6582.0, 
			6872.0, 
			6042.0, 
			6612.0
		],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936+catalog-pg-6-6582-6872-6042-6612.jpg"
	},
	{
		"_id" : ObjectId("5d37700d90719079bec9abc1"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [ 
			6570.0, 
			6552.0, 
			6534.0
		],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936-catalog++pg-8-6570-6552-6534-.jpg"
	},
	{
		"_id" : ObjectId("5d37709a90719079bec9abc2"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [ 
			6401.0
		],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-early-spring-1936-catalog-pg+9+6401.jpg"
	},
	{
		"_id" : ObjectId("5d3770ee90719079bec9abc3"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [ 
			6579.0, 
			6546.0, 
			6497.0
		],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936-catalog+pg-10-6579-6546-6497-.jpg"
	},
	{
		"_id" : ObjectId("5d3771ad90719079bec9abc4"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [ 
			6610.0, 
			6614.0, 
			6612.0
		],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-early-spring-1936-catalog-pg+11-6610-6614-6612.jpg"
	},
	{
		"_id" : ObjectId("5d3771e890719079bec9abc5"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [ 
			6587.0, 
			6604.0, 
			6599.0
		],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936-catalog+pg-12-6587-6604-6599.jpg"
	},
	{
		"_id" : ObjectId("5d37722d90719079bec9abc6"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-early-spring-1936-catalog-pg-13-none.jpg"
	},
	{
		"_id" : ObjectId("5d37728890719079bec9abc8"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [ 
			6568.0, 
			6564.0, 
			6593.0
		],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936-catalog+pg-14-6568-6564-6593-.jpg"
	},
	{
		"_id" : ObjectId("5d3772cd90719079bec9abc9"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [ 
			6572.0, 
			6601.0, 
			6523.0
		],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-early-spring-1936-catalog-pg+15-6572-6601-6523.jpg"
	},
	{
		"_id" : ObjectId("5d37737490719079bec9abca"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936-catalog+page-16-none.jpg"
	},
	{
		"_id" : ObjectId("5d3773d490719079bec9abcb"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-early-spring-1936-catalog-pg-17-none.jpg"
	},
	{
		"_id" : ObjectId("5d37742690719079bec9abcc"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [ 
			6537.0, 
			6596.0, 
			6574.0, 
			6554.0, 
			6004.0, 
			6584.0
		],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-Early-Spring-1936-catalog+pg-18-6537-6596-6574-6554-6004-6584-.jpg"
	},
	{
		"_id" : ObjectId("5d37748a90719079bec9abcd"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [ 
			6554.0, 
			6589.0
		],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-early-spring-1936-catalog-pg-19-6554-6589-wedding.jpg"
	},
	{
		"_id" : ObjectId("5d37755a90719079bec9abce"),
		"catalog" : ObjectId("5d34f06a1cf4dd26404271ef"),
		"patterns" : [ 
			6575.0, 
			6507.0, 
			6542.0, 
			6613.0
		],
		"imgURL" : "https://vintage4me2catalogdb.s3.us-east-2.amazonaws.com/Butterick-early-spring-1936-catalog-pg-20-6575-6507-6542-6613.jpg"
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
