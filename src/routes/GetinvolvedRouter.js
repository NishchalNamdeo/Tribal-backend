const express = require("express");
const router = express.Router();
const {volunteerPageController, membershipPageController,  donatePageController} = require("../controllers/GetinvolvedController");




router.get("/volunteer", volunteerPageController);
router.get("/membership", membershipPageController);
router.get("/donate", donatePageController);



module.exports = router;