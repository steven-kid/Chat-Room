const mysql = require('mysql')

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'chat'
});

connection.connect();

connection.query("select * from userinfo", (error, results, fields) => {
  console.log(results);
})