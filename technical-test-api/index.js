const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const { limiter } = require("./utils/constants");
const routes = require("./routes");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World bro!");
});

connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//to do code here

app.use(limiter);

app.use("/api/v1", routes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
