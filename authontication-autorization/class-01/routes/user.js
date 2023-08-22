const express = require("express");
const router = express.Router();

const User = require("../modals/User");

const { signup } = require("../controller/Autho");

// router.post("/ligin", login);
router.post("/singup", signup);

module.exports = router;