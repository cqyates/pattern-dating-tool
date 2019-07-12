// const db = require("../models");
// const multer = require("multer");

// // SET STORAGE
// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, "public/assets/images");
//   },
//   filename: function(req, file, cb) {
//     cb(null, Date.now() + ".jpg");
//   }
// });

// const upload = multer({ storage: storage })
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