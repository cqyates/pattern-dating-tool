const router = require("express").Router();
const { upload, uploadAWS } = require('../utils/image-upload');

router.post("/api/imgupload", upload.single('file'), async (req, res) => {
  console.log(req.file)
 uploadAWS(req.file, res) 
})

router.get("/api", (req, res)=> {
  res.json({ msg: "routes match"})
})

module.exports = router;

