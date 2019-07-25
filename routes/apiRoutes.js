const router = require("express").Router();
const { upload, uploadAWS } = require('../utils/image-upload');
const CompanyController = require("../controllers/CompanyController")

//working
router.post("/api/imgupload", upload.single('file'), async (req, res) => {
 uploadAWS(req.file, res) 
})
//not in use
router.get("/api", (req, res)=> {
  res.send("API is working")
})
//not currently working.  Though I can get the information straight from Robo 3T
router.get("/api/company", async (req, res) =>{
  const result = await CompanyController.findAll({})
  console.log(result)
  res.send ({ result })
})

module.exports = router;

