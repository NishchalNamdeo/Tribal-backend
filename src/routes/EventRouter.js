const express = require("express");
const router = express.Router();
const {UpcomingPageController, pastPageController} = require("../controllers/EventController");



router.get("/upcoming-events", UpcomingPageController);
router.get("/past-events", pastPageController);


module.exports = router;