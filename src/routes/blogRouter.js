const express = require("express");
const router = express.Router();
const {blogPageController} = require("../controllers/blogController");



router.get("/", blogPageController);

module.exports = router;