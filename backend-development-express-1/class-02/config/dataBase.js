const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then( () => {
        console.log("mongo db connection is successfully");
    })
    .catch( (err) => {
        console.log("database is not connect", err);
        console.error(err.massage);
        process.exit(1);
    })
}

module.exports = dbConnect;