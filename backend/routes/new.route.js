const express = require("express");
const router = express.Router();
const NewController = require('../controllers/new.controller.js');
//const multerUploader = require('../middlewares/multer.config.js');

router.post("/create", NewController.create); //Store the New in to the CSV file.
router.post("/upload",NewController.uploadImage);
module.exports = router
