
const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = async() => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then( () => {
        console.log("database connect successfully...!");
    })
    .catch( (err) => {
        console.log("Database connection is not successfull...!");
        console.error(err);
        process.exit(1);
    })
}