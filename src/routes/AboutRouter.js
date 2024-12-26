const express = require("express");
const router = express.Router();
const {AboutPageController, historyPageController, leadershipPageController, achievementsPageController, structurePageController} = require("../controllers/AboutController");




router.get("/mission", AboutPageController);
router.get("/history", historyPageController);
router.get("/leadership", leadershipPageController);
router.get("/achievements", achievementsPageController);
router.get("/structure", structurePageController);







module.exports = router;