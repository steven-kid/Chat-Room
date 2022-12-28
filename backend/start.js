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
userIds = [];
userNames = [];

// login
let ret;
const updateState = () => {
  connection.query("select * from userinfo", (error, results, fields) => {
    ret = results;
    ret.forEach((element) => {
      userIds.push(element.userId);
      userNames.push(element.userName);
    });
  });
};

// respond with "hello world" when a GET request is made to the homepage
app.get("/login", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  updateState();
  res.send(ret);
});

// register
let parms = [];

updateState();

const cut = (url) => {
  parms = url.split("?");
  let randomId = Math.ceil(Math.random() * 100000);
  while (userIds.includes(randomId))
    randomId = Math.ceil(Math.random() * 100000);
  parms[0] = Math.ceil(Math.random() * 100000);
  console.log(parms);
};

app.post("/register", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  console.log("收到请求体", req.url);
  cut(req.url);
  updateState();
  if (userNames.includes(parms[1])) {
    console.log("duplicate here");
    res.send({status: "duplicate"});
  } else {
    console.log("try insert");
    connection.query(
      "insert into userInfo(userId, userName, password, isAdmin) values(?, ?, ?, 0)",
      parms
    );
    res.send({status: "ok"});
  }
  updateState();
  res.status(201).send();
});

app.listen(8000, () => {
  console.log("port start at 8000");
});
