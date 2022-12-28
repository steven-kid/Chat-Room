const { response } = require("express");
const express = require("express");
const app = express();

const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "chat",
});

connection.connect();

app.listen(8000, () => {
  console.log("express start at port 8000");
});