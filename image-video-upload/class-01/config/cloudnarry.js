const cloudinary = require("cloudinary").v2;
require("dotenv").config();

exports.cloudinaryConnect = async() => {
    const API_KEY = process.env.API_KEY, CLOUD_NAME = process.env.CLOUD_NAME, API_SECRET = process.env.API_SECRET;
    try{
        cloudinary.config(
            {
                cloud_name: CLOUD_NAME,
                api_key: API_KEY,
                api_secret: API_SECRET,
            }
        )
        console.log("cloudanerry successfully connectd");
    }
    catch(error){
        console.log("cloudanerry NOT connectd" + error);
    }
}
