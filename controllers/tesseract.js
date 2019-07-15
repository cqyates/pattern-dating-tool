//Here we are passing the image from uploads and run them through the tesseract to get the pattern numbers. We need to add regex and a pattern array, also need to pass the images from the upload folder.

const uploads = require('../uploads');

const path = require('path');
//FIXME what is going on here??  This came from the tesseract.js documentation on github
const { TesseractWorker } = require('../../');
//FIXME what is going on here??  This came from the tesseract.js documentation on github
const [,, imagePath] = process.argv;
//FIXME what is going on here??  This came from the tesseract.js documentation on github
const image = path.resolve(__dirname, (imagePath || '../../uploads/'));
const tessWorker = new TesseractWorker();

console.log(`Recognizing ${image}`);

tessWorker.recognize(image)
  .progress((info) => {
    console.log(info);
  })
  .then((data) => {
    console.log(data.text);
  })
  .catch((err) => {
    console.log('Error\n', err);
  })
  .finally(() => {
    process.exit();
  });

  //Is this where I push the information to the database