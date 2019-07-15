const router = require("express").Router();
const multer = require("multer");
const multerS3  = require("multer-s3");
const AWS = require("aws-sdk");
const sharp = require("sharp");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
})


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
const upload = multer({
  fileFilter, 
  //does this go away now?
  dest: "./uploads",
  storage: multerS3 ({
    acl: 'public-read',
    s3,
    bucket: 'vintage4me2catalogdb',
    metadata: function (req, file, cb) {
      //FIXME not sure if file.upload is correct
      cb(null, {fieldName: "Testing Metadata"});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  }),
  
  limits: {
    files: MAX_SIZE
  }
})

router.post("/api/imgupload", upload.single('file'), async (req, res) => {
  console.log("here")
  console.log(req.file);

  res.json({ msg: "Route worked"})
})

router.get("/api", (req, res)=> {
  res.json({ msg: "routes match"})
})

module.exports = router;

// module.exports = upload?

//first the image is uploaded from the UploadApp and passed here to the back end, now I need to take this image object and "run it through the tesseract". 
//Once I have the image and the text result, I need to make the file size a lot smaller, add a watermark(I hope) and then send the image through to my AWS account.