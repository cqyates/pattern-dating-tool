//dependencies
require('dotenv').config();
const multer = require("multer");
const fs = require("fs");
const AWS = require("aws-sdk");
const sharp = require("sharp");


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

//this function checks the file type to make sure it accepted
const fileFilter = function (req, file, cb) {
  const allowed = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/pdf"];
  if (!allowed.includes(file.mimetype)) {
    const err = new Error("Wrong Type")
    err.code = "LIMIT_FILE_TYPES";
    return cb(err, false)
  }
  cb(null, true)
}

//this is multer's upload function
const upload = multer({
  fileFilter,
  dest: "./uploads",
  limits: {
    files: MAX_SIZE
  }
})
//This is the upload to AWS.  
const uploadAWS = async (file, res, cb) => {
  console.log(file.path)
  try {
      fs.readFile(file.path, function(err,data){
        params = { Bucket: myBucket, Key: `${file.originalname}`, Body: data }
        s3.upload(params, function (err, data) {

          if (err) {
 
              console.log(err)
 
          } else {
 
              console.log("Successfully uploaded data to myBucket/myKey");
              
              // const imgPath = `https://s3${myBucket}/${file.originalname}`;
              // //FIXME Need help writing this callback function, purpose is to send on the
              // cb(imgPath)
          }
 
       });

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