const router = require("express").Router();
const { upload, uploadAWS } = require('../utils/image-upload');
const CompanyController = require("../controllers/CompanyController")

//working but console.log is not firing.
router.post("/api/imgupload", upload.single('file'), async (req, res) => {
 uploadAWS(req.file, res) 
 console.log(res)

})

router.get("/api", (req, res)=> {
  res.send("API is working")
})

router.get("/api/company", async (req, res) =>{
  const result = await CompanyController.findAll({})
  console.log(result)
  res.send ({ result })
})

module.exports = router;

