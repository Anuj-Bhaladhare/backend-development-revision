const jwt = require("jsonwebtoken");
require("dotenv").config();

// ------------------------------------------------
exports.autho = async (req, res, next) => {
  try {

    const token =
      req.cookies.token ||
      req.body.token ||
      req.body.token ||
      req.header("Authorization").replace("Bearer ", "");

    if (!token || token === undefined) {
      res.status(401).json({
        success: false,
        massage: "token missing",
      });
    }

    // Verify the token
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload;
    } 
    catch (err) {
      return res.status(401).json({
        success: false,
        massage: "token is invalide",
      });
    }
  } 
  catch (error) {
    return res.status(401).json({
        success:false,
        message:'Something went wrong, while verifying the token',
        error:error.message,
    });
  }
};



// ----------------------------------------------------
exports.isStudent = async (req, res, next) => {
  try {
    if(req.body.user !== "Student"){
        return res.status(401).json({
            success: false,
            massage: "This is protected rout for student",
        })
    }
    next();
  } 
  catch (err) {
    return res.status(500).json({
        success: false,
        massage: "User Role is not matching",
    })
  }
};



// ---------------------------------------------------
exports.isAdmin = async (req, res, next) => {
  try {
    if(req.body.role !== "Admin"){
       return res.status(401).json({
        success: false,
        massage: "This is protected rout for Admin",
       })
    }
    next();
  } 
  catch (err) {
    return res.status(500).json({
        success: false,
        massage: "User Role is not matching",
    })
  }
};
