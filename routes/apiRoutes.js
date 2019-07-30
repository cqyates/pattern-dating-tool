const router = require("express").Router();
const { upload, uploadAWS } = require('../utils/image-upload');
const CompanyController = require("../controllers/CompanyController")
const PatternController = require("../controllers/PatternController")

//working
router.post("/api/imgupload", upload.single('file'), async (req, res) => {
  uploadAWS(req.file, res);
})
//route works like this but when I try to bring in the db.create function it fails because it can't find the value of req.
router.post("/api/catupload", async (req, res) => {
  console.log(req.body)
  res.json(req.body)
})
//populate companyList works
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

