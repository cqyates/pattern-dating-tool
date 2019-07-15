const multer = require("multer");
// const multerS3 = require("multer-s3");
// const AWS = require("aws-sdk");
// const sharp = require("sharp");

// const s3 = new AWS.S3({
//   accesKeyId: process.env.AWSAccessKeyId,
//   secretAccessKey: process.env.AWSSecretKey,
// })


const MAX_SIZE = 20000000;
const fileFilter = function(req, file, cb){
  const allowed = ["image/jpeg", "image/png", "image/gif"];
  if(!allowed.includes(file.mimetype)){
    const err = new Error("Wrong Type")
    err.code = "LIMIT_FILE_TYPES";
    return cb(err, false)
  }
  cb(null, true)
}
const image = multer({
  fileFilter, 
  dest: "./uploads",
  // storage: multerS3 ({
  //   acl: 'public-read',
  //   s3,
  //   bucket: 'vintage4me2catalogdb',
  //   metadata: function (req, file, cb) {
  //     //FIXME not sure if file.upload is correct
  //     cb(null, {fieldName: "Testing Metadata"});
  //   },
  //   key: function (req, file, cb) {
  //     cb(null, Date.now().toString())
  //   }
  // }),
  
  limits: {
    files: MAX_SIZE
  }
})

module.exports = image;