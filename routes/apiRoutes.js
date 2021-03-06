const router = require("express").Router();
const { upload, uploadAWS } = require('../utils/image-upload');
const CompanyController = require("../controllers/CompanyController");
const PatternController = require("../controllers/PatternController");
const CatalogController = require("../controllers/CatalogController");
const PageController = require("../controllers/PageController")

//working
router.post("/api/imgupload", upload.single('file'), async (req, res) => {
  console.log(req.file)
  uploadAWS(req.file, res, (filePath)=> {
    res.send(filePath)
  }, (err) => {
    res.json(err)
  })
})
//route works like this but when I try to bring in the db.create function it fails because it can't find the value of req.
router.post("/api/catupload", (req, res) => {
  const result = CatalogController.setCatalog(req.body)
    .then(dbModel => {
      console.log(dbModel)
      res.json(dbModel) 
    })
    .catch(err => res.status(422).json(err));
})
router.post("/api/pgupload", (req, res) => {
  const result = PageController.setPage(req.body)
    .then(dbModel => {
      console.log(dbModel)
      res.json(dbModel) 
    })
    .catch(err => res.status(422).json(err));
})
//populate companyList works
router.get("/api/company", (req, res) => {
  const result = CompanyController.findAll()
    .then(dbModel => {
      res.json(dbModel) 
    })
    .catch(err => res.status(422).json(err));
})

router.get("/api/pattern/:query", (req, res) => {
  const patternResult = PatternController.findByPatternNumber(req.params.query)
  .then(dbModel => {
    console.log(dbModel)
    res.json(dbModel)
  })
  .catch(err => res.status(422).json(err));

})

// router.route("/api/pattern/:query").get(PatternController.findByPatternNumber);


module.exports = router;

