var mysql = require('mysql');
require('dotenv').config();
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'process.env.USER',
    password: 'process.env.PASS',
    database: 'burgers_db',
  });
}

connection.connect(function (err) {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
