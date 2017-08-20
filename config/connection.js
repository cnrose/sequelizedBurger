//dependencies
var mysql = require("mysql");
//create connection to mysql database
var connection; 

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "Basic2",
		database: "burgers_db"
	});
};

connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;