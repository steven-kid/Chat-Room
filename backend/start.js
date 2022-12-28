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

updateState();

const cut = (url) => {
  let parms = [];
  parms = url.split("?");
  let randomId = Math.ceil(Math.random() * 100000);
  while (userIds.includes(randomId))
    randomId = Math.ceil(Math.random() * 100000);
  parms[0] = Math.ceil(Math.random() * 100000);
  console.log(parms);
  return parms;
};

app.post("/register", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  console.log("收到请求体", req.url);
  let parms = cut(req.url);
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

// get friends
let friends;
app.post("/friends", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  console.log("收到请求体", req.url);
  let parms = [parseInt(cut(req.url)[1])];
  connection.query(
  "SELECT userName, friendID FROM userinfo, friendrelation where friendrelation.userId = ? and friendrelation.friendID = userinfo.userID",
    parms, (error, results, fields) => {
      console.log(results);
      friends = results;
    }
  );
  res.status(201).send(friends);
});

// get messages
let message;
app.post("/message", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  console.log("收到请求体", req.url);
  let parms = [parseInt(cut(req.url)[1]), parseInt(cut(req.url)[2]), parseInt(cut(req.url)[2]), parseInt(cut(req.url)[1])];
  connection.query(
    "select * from messageinfo, userinfo where userinfo.userid = messageinfo.senderid and (senderID = ? and receiverID = ?) or (senderID = ? and receiverID = ?) GROUP BY messageinfo.messageID ORDER BY sendTime;",
    parms, (error, results, fields) => {
      console.log(results);
      message = results;
    }
  );
  res.status(201).send(JSON.stringify(message));
});

app.listen(8000, () => {
  console.log("port start at 8000");
});
