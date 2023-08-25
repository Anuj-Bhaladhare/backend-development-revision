const express = require("express");
const router = express.Router();

// route handaler
const { localFileUpload, imageUpload, videoUpload, fileQualityReduce } = require("../controllers/fileUpload");

router.post("/localFileUpload", localFileUpload);
router.post("/imageupload", imageUpload);
router.post("/videoupload", videoUpload);
router.post("/filequalityreduce", fileQualityReduce);

// exporting
module.exports = router;




