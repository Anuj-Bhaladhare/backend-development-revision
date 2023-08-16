// const express = require("express");
// const router = express.Router();

// // fetching the data from controller
// const { createTodo } = require("../controllers/todoController");

// // type of request
// router.post("/createtodo", createTodo);

// // export the router
// module.exports = router;


const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/todoController");

router.post("/createtodo", createTodo);

module.exports = router;
