const router = require("express").Router();
let Todo = require("../models/todos.model");

router.route("/").get((req, res) => {});

module.exports = router;