const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (_, _, cb) {
    cb(null, "./upload");
  },
  filename: function (_, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    const uniqe = Date.now();
    cb(null, `${file.fieldname}-${uniqe}.${extension}`);
  },
});

const upload = multer({storage:storage}).single('image');

module.exports = { upload };

