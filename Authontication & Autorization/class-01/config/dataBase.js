const mongoose = require("mongoose");

require("dotenv").config();

exports.dbConnect = async() => {
        mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useunifiedTopology: true,
        })
        .then( () => {
            console.log("Database Connect successFully...!");
        })
        .catch( (error) => {
            console.log("Database NOT Connect");
            console.error(error);
            process.exit(1);
        })
    }