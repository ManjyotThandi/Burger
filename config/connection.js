// This file makes the connection to our sql db for our orm

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
});

// Make connection
connection.connect(function(err){
    if(err) throw err

    console.log("connected as id" + connection.threadId)
});

// Export the connection so our orm file can use it
module.exports = connection;