const express = require("express");
const router = express.Router();
const {galleryPageController, videosPageController} = require("../controllers/galleryController");



router.get("/photos", galleryPageController);
router.get("/videos", videosPageController);


module.exports = router;