const { response } = require("express");
const express = require("express");
const app = express();

const mysql = require('mysql')

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'chat'
});

connection.connect();

let ret;

connection.query("select * from userinfo", (error, results, fields) => {
  ret = results;
})

// respond with "hello world" when a GET request is made to the homepage
app.all("/login", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.send(ret);
});

app.listen(8000, () => {
  console.log("express start at port 8000");
});