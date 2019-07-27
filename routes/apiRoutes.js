const router = require("express").Router();
const { upload, uploadAWS } = require('../utils/image-upload');
const CompanyController = require("../controllers/CompanyController")
const PatternController = require("../controllers/PatternController")

//working
router.post("/api/imgupload", upload.single('file'), async (req, res) => {
  uploadAWS(req.file, res)
})
//not in use
router.get("/api", (req, res) => {
  res.send("API is working")
})

router.get("/api/company", (req, res) => {
  const result = CompanyController.findAll()
    .then(dbModel => {
      console.log(dbModel)
      res.json(dbModel) 
  
    })
    .catch(err => res.status(422).json(err));
  console.log(result)
})

router.get("/api/pattern", (req, res) => {
  const result = PatternController.findAll()
  .then(dbModel => {
    console.log(dbModel)
    res.json(dbModel)
  })
  .catch(err => res.status(422).json(err));
  console.log(result)
})

router.route("/api/pattern/:id").get(PatternController.findById);


module.exports = router;

