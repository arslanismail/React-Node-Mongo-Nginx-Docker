const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const mainRoutes = require("./routes/router");
mongoose.connect("mongodb://mongo:27017/assignment", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => {
  console.log("Db Connection Error: ", err);
});

db.once("open", () => {
  console.log("Database Connection Established");
});

const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Servier is running on ${port}`);
});


app.use("/api", mainRoutes);
