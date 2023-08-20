const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// middlewear
app.use(express.json());

const blog = require("./modals/postModal");
// mouniting
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

app.listen( PORT, () => {
    console.log(`server started at port number ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("<h1>This is home Page</h1>")
});