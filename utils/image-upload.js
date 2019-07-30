//dependencies
require('dotenv').config();
const multer = require("multer");
const fs = require("fs");
const AWS = require("aws-sdk");
<<<<<<< HEAD
const sharp = require("sharp");
const db = require("../models")
=======
// const sharp = require("sharp");
// const db = require("../models")
>>>>>>> 6456a5bcd8629e4c475ffa3a9e129df35f3b239e


AWS.config.update({
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
});

//S3 Constructor
const s3 = new AWS.S3({});
//Saving myBucket name as a const
const myBucket = "vintage4me2catalogdb";
//saving Max Size as a const
const MAX_SIZE = 20000000;

//this function checks the file type to make sure it accepted.  It is called below in the upload function.
const fileFilter = function (req, file, cb) {
  const allowed = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/pdf"];
  if (!allowed.includes(file.mimetype)) {
    const err = new Error("Wrong Type")
    err.code = "LIMIT_FILE_TYPES";
    return cb(err, false)
  }
  cb(null, true)
}

//this is multer's upload function.  This is called on the API route as uploads.single
const upload = multer({
  fileFilter,
  dest: "./uploads",
  limits: {
    files: MAX_SIZE
  }
})
//This is the upload to AWS.  This is called on the routes page
const uploadAWS = async (file, res, cb) => {
  try {
    fs.readFile(file.path, function (err, data) {
      params = { Bucket: myBucket, Key: `${file.originalname}`, Body: data }
      s3.upload(params, function (err, data) {

        if (err) {

          console.log(err)

        } else {
          const filePath = `https://${myBucket}.s3.us-east-2.amazonaws.com/${file.originalname}`
          console.log(data)

          
        }

      })

    })
  }
    catch {
      console.log("try function failed")
    }
  }


module.exports = {
    upload,
    uploadAWS
  };