

// creating express app
const express = require("express");
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middlewear to parse json request body
app.use(express.json());

// import route from ToDo API
const todoRoutes = require("./routes/todos");

// mount the todo api route
app.use("/api/v1", todoRoutes);

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const dbConnect = require("./config/dataBase");
dbConnect.connect();

app.get("/", (req, res) => {
  res.send("<h1>This is home page babby</h1>");
})





