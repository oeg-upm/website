const express = require("express");
const router = express.Router();
const NewController = require('../controllers/new.controller.js');

router.post("/create", NewController.create);
module.exports = router
