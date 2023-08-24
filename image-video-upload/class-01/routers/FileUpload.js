const express = require("express");
const router = express.Router();

// route handaler
const { localFileUpload, imageUpload, videoUpload } = require("../controllers/fileUpload");

router.post("/localFileUpload", localFileUpload);
router.post("/imageupload", imageUpload);
router.post("/videoupload", videoUpload);

// exporting
module.exports = router;




