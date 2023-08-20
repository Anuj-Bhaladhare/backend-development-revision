const express = require("express");
const router = express.Router();

// import controller
const { dummyRoute } = require("../controllers/likeController");
const { createComment } = require("../controllers/commentController");


// difine Route
router.get("/dummy", dummyRoute);
router.post("/comment/create", createComment);


// export router
module.exports = router;