const express = require("express");
const router = express.Router();
const TestController = require('../controllers/test.controller.js');
router.get("/", TestController.test);
module.exports = router;
