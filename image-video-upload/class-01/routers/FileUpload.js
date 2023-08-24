const express = require("express");
const router = express.Router();

// route handaler
const { localFileUpload } = require("../controllers/fileUpload");

router.post("/localFileUpload", localFileUpload);

// exporting
module.exports = router;




