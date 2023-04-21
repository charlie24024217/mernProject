const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect("mongodb://localhost:127.0.0.1/mernDB")
  .then(() => {
    console.log("正在連接mongooseDB");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8080, () => {
  console.log("後端伺服器正在聆聽port8080");
});
