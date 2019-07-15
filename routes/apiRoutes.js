const router = require("express").Router();
const upload = require('../utils/image-upload');

router.post("/api/imgupload", upload.single('file'), async (req, res) => {
  console.log("here")
  console.log(req.file);

  res.json({ msg: "Route worked"})
})

router.get("/api", (req, res)=> {
  res.json({ msg: "routes match"})
})

module.exports = router;

