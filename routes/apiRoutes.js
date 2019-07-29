const router = require("express").Router();
const { upload, uploadAWS } = require('../utils/image-upload');
const CompanyController = require("../controllers/CompanyController")
const PatternController = require("../controllers/PatternController")

//working
router.post("/api/imgupload", upload.single('file'), async (req, res) => {
  uploadAWS(req.file, res);
})
//not working
router.post("/api/pgupload", async (req, res) => {
  console.log("this is the req on the backend apiroute" + req.body)
})
//not in use
router.get("/api", (req, res) => {
  res.send("API is working")
})

router.get("/api/company", (req, res) => {
  const result = CompanyController.findAll()
    .then(dbModel => {
      res.json(dbModel) 
    })
    .catch(err => res.status(422).json(err));
  console.log(result)
})

router.get("/api/pattern/:query", (req, res) => {
  const patternResult = PatternController.findByPatternNumber(req.params.query)
  .then(dbModel => {
    console.log(dbModel)
    res.json(dbModel)
  })
  .catch(err => res.status(422).json(err));
  console.log(patternResult)
})

// router.route("/api/pattern/:query").get(PatternController.findByPatternNumber);


module.exports = router;

