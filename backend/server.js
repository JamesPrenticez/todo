const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

const todosRouter = require("./routes/todos");

app.use(cors());
app.use(bodyParser.json());
app.use("/todos", todosRouter);

mongoose.connect("mongodb://127.0.0.1:27017/tasks", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});