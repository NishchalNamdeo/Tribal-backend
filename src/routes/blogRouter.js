const express = require("express");
const router = express.Router();
const {blogPageController} = require("../controllers/blogController");



router.get("/blogs", blogPageController);

module.exports = router;