var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: process.env.USER,
	password: process.env.PASS,
	database: 'burgers_db'
});

connection.connect(function(err) {
	if (err) {
		console.log('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
