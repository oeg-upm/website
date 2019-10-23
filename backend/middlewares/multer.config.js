const multer = require('multer');
const storage = function(dir){
	return multer.diskStorage({
	  destination: function (req, file, cb) {
	    cb(null, `uploads/${dir}`);
	  },
	  filename: function (req, file, cb) {
	    cb(null, file.originalname);
	  }
	});
}
 
module.exports = multer({ storage: storage });
