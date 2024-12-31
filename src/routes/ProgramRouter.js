const express = require("express");
const router = express.Router();
const { programController, healthController, livelihoodController, environmentalController, cultureController, specialinitiativeController } = require("../controllers/ProgramController");



router.get("/education", programController);
router.get("/health", healthController);
router.get("/livelihood", livelihoodController);
router.get("/environmental", environmentalController);
router.get("/culture", cultureController);
router.get("/special-initiative", specialinitiativeController);








module.exports = router;