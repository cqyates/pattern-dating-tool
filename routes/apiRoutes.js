const router = require("express").Router();
const { upload, uploadAWS } = require('../utils/image-upload');

router.post("/api/imgupload", upload.single('file'), async (req, res) => {
  //const modelObject = {} 
 uploadAWS(req.file, res) 
//  , (awsPath => {
//   //  modelObject.awsPath = awsPath;
//   //  modelObject.company = req.body.company;

//                                        }) 
 //add cb function give us result get data from request and then push to database

})

router.get("/api", (req, res)=> {
  res.json({ msg: "routes match"})
})

module.exports = router;

