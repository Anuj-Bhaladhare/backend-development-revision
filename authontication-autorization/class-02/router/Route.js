const express = require("express");
const router = express.Router();

const { signup, login } = require("../controller/Autho"); // Corrected import path
const { autho, isStudent, isAdmin } = require("../middlewear/autho");

router.post("/signup", signup);
router.post("/login", login);

// testing the protected route
// -----------------------------------------------
router.get("/autho", autho, (req, res) => {
    res.json({
        success: true,
        massage: "Welcome to the Protected route for TESTS",
    });
})



// ---------------------------------------------------
router.get("/student", autho, isStudent, (req, res) => {
    res.json({
        success: true,
        massage: "Welcome to the Protected route for Students",
    })
})



// ---------------------------------------------------
router.get("/admin", autho, isAdmin, (req, res) => {
    res.json({
        success: true,
        massage: "Welcome to the Protected route for Admin",
    })
})



module.exports = router;
