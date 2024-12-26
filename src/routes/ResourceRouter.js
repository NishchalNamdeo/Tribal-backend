const express = require("express");
const router = express.Router();
const {researchPageController, reportsPageController, audioPageController, studiesPageController} = require("../controllers/ResourceController");



router.get("/research", researchPageController);
router.get("/tribal-reports", reportsPageController);
router.get("/audio-visual", audioPageController);
router.get("/tribal-studies", studiesPageController);





module.exports = router;