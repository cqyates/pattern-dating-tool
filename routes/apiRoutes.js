const router = require("express").Router();
const { upload, uploadAWS } = require('../utils/image-upload');
const companyController = require("../controllers/CompanyController")

//working but console.log is not firing.
router.post("/api/imgupload", upload.single('file'), async (req, res) => {
 uploadAWS(req.file, res) 
 console.log(res)

})

router.get("/api", (req, res)=> {
  res.send("API is working")
})



module.exports = router;

