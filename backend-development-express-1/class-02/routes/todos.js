

const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/todoController");

router.post("/createtodo", createTodo);

module.exports = router;
