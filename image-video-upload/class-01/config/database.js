const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async() => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then( () => {
        console.log("database connected successfully...!");
    })
    .catch( (err) => {
        console.log("database not connected");
        console.error(err);
        process.exit(1);
    })
};