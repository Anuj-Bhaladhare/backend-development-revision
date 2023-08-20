const express = require("express");

const router = express.Router();

const { login, signup } = require("../controller/Autho");

// router.post("/ligin", login);
router.post("/singup", signup);


module.exports = router;