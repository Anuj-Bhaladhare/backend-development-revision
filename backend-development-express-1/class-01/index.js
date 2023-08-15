const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("this is home page babby");
})

app.listen(3000, () => {
    console.log("app started at port number 3000");
})

// app.post("/api/cars", (req, res) => {
//     const {name, brand} = req.body;
//     console.log(name);
//     console.log(brand);
//     res.send("name and brand submited succesfully...!");
// })

app.post("/api/about", (req, res) => {
    const {name, group} = req.body;
    console.log(name);
    console.log(group);
    console.log("about page submited successfully");
})


// Connect to the database
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/anujBataBase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( () => {
    console.log("database is connected...!");
})
.catch( (err) => {
    console.log("database is not connected", err);
});
