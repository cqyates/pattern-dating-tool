const sharp = require("sharp");

const { TesseractWorker } = require('tesseract.js');
const path = require('path');

const patternNumber = [];

const worker = new TesseractWorker({
  //not sure this part works

  langPath: path.join(__dirname, '..', 'lang-data'), 
});

worker
//How do make this pull any file in the uploads folder?
  .recognize(req.file)
  .progress((info) => {
    console.log(info);
  })
  .then((result) => {
    console.log(result.text);
    process.exit();
  });