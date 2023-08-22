const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000 ;

// middlewear
app.use(express.json());

// define routes
const user = require("./routes/user");
app.use("/api/v1", user);

// mongodb connect;
require("./config/dataBase").connect();

// server start
app.listen( PORT, (req, res) => {
    console.log(`server started at port number ${PORT}`);
})