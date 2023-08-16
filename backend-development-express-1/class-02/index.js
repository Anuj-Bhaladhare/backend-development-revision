const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

const todoRoutes = require("./routes/todoRoute");

app.use(express.json()); // Parse JSON data
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
