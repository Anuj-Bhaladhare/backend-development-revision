const User = require("../modals/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { options } = require("../routes/user");
require("dotenv").config();

// ----------------Sign Up handaler ---------------
const signup = async(req, res) => {
    try{
        // fetch Data
        const { name, email, password, role } = req.body;

        // chack user allready exixt
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success: false,
                massage: "user allready exist",
            })
        }

        // encrypting password 
        let hashingPassword;
        try{
            hashingPassword = await bcrypt.hash(password, 10);
        }
        catch(err){
            res.status(404).json({
                success: false,
                message: "Password encryption failed",
            })
        }

        // creating user entry
        await User.create({
            name, email, password:hashingPassword, role
        })

        return res.status(201).json({
            success: true,
            massage: "User Created Successfully...!",
        })

    }
    catch(err){
        res.status(500).json({
            success: false,
            massage: "user Not Created plz Try again letter",
        })
    }
}


// ----------  Login Handaler --------------------
const login = async (req, res) => {
    try {
        // Fetch data
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        // Find user by email
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found. Please register",
            });
        }

        const payload = {
            email: user.email,
            id: user._id,
            role: user.role,
        };

        // verify password and generate JWT token
        const validPassword = await bcrypt.compare(password, user.password); // Use user.password instead of User.password
        if (validPassword) {
            let token = jwt.sign(payload, 
                                   process.env.JWT_SECRET, 
                                   {
                                      expiresIn: "2h",
                                   });

            user = user.toObject();
            user.token = token;
            user.password = undefined;

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            };

            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: "User login successful",
            });

                // res.status(200).json({
                //     success:true,
                //     token,
                //     user,
                //     message:'User Logged in successfully',
                // });
        } 
        else {
            // password do not match
            return res.status(403).json({
                success: false,
                message: "Invalid Email or Password",
            });
        }

    } 
    catch (error) {
        res.status(500).json({
            success: false,
            message: "User login failed. Please try again later.",
        });
    }
};



// ----------- Exporting -------------------
module.exports = {
    signup,
    login
};