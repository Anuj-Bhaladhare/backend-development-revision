const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// cookies parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// middlewear
app.use(express.json());

// DB Connection
require("./config/dataBase").connect();


// route handaler
const route = require("./router/Route");
app.use("/api/v1", route);

app.listen( PORT, () => {
    console.log("server started at port number ", PORT);
})