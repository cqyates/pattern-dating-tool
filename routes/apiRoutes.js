const db = require("../models");
const multer = require("multer");

// SET STORAGE
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/assets/images");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + ".jpg");
  }
});

const upload = multer({ storage: storage })