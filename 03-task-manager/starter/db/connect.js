const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://jorden:1234@nodeexpressprojects.xkfxw3w.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects";

const connectDB = (url) => {
  return mongoose
    .connect(connectionString)
    .then(() => console.log("CONNECTED TO THE DB..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
