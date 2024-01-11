const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/task-manager";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Error connecting to database:", error);
  });
