const router = require("express").Router();
const multer = require("multer");

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
  dest: "./uploads",
  fileFilter,
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

//first the image is uploaded from the UploadApp and passed here to the back end, now I need to take this image object and "run it through the tesseract". 
//Once I have the image and the text result, I need to make the file size a lot smaller, add a watermark(I hope) and then send the image through to my AWS account.