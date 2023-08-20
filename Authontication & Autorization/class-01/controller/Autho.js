const User = require("../modals/User");
const passwordHash = require("password-hash");

exports.signup = async(req, res) => {
    try{
        //  data fetch from request ki body
        const { name, email, password, role } = req.body;

        // chack user allready exixt
        const existingUser = await User.findOne( {email} );

        if(existingUser){
            return res.status(400).json({
                success: false,
                massage: "user allready exixt",
            })
        }

        // hassing password
        let hashedPassword;
        try{
            hashedPassword = passwordHash.generate(password);
        }
        catch(err){
            res.status(500).json({
                success: false,
                massage: "password is not hassing",
            })
        }

        // creating new user 
         const user = await User.create({
            name, email, password:hashedPassword, role
         })

         return res.status(200).json({
            success: true,
            massage: "user Created successfully",
        })

    }
    catch(err){
        console.log("somthing want wrong");
        res.status(500).json({
            success: false,
            massage: "user not created/Resistor somethif want worng",
        })
    }
}



// ===================================================================

// exports.login = async(req, res) => {
//     try{
//         // data fetch from reqest ki body
//         const { email, password } = req.body;

//         // find user is exist
//         const existingUser = await User.findOne( {email} );

//         // if user not exist 
//         if(!existingUser){
//             return res.status(404).json({
//                 success: false,
//                 massage: "user not found plz singup",
//             })
//         }

//         let hashedPasswordLogin;
//         try{
//             hashedPasswordLogin = passwordHash.generate(password)
//         }
//         catch(error){
//             res.status(400).json({
//                 success: false,
//                 massage: "password not secure",
//             })
//         }

//         // find password is true
//         const matchPassword = await User.findOne( {password:hashedPasswordLogin});

//         // if password not match
//         if(!matchPassword){
//             return res.status(400).json({
//                 success: false,
//                 massage: "password incorrect",
//             })
//         }

//         // email and password is right
//         return res.status(200).json({
//             success: true,
//             massage: "user login successfully",
//         })

//     }
//     catch(err){
//         console.log("user NOT login");
//         res.status(500).json({
//             success: false,
//             massage: "user NOT login , try agail letter",
//         })
//     }
// }