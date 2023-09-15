const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/test");

app.get("/getUsers", (req, res) => {
  UserModel.find()
    .then((profesores) => res.json(profesores))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Sirviendo");
});
