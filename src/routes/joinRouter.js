const express = require("express");
const router = express.Router();
const {joinPageController} = require("../controllers/joinController");



router.get("/", joinPageController);

module.exports = router;