var mysql = require("mysql");
var express = require("express");
var burger = express.Router();
var connection;

if (process.env.JAWSDB_URL) {
   connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "definethis_db"
});
}
// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
    });



module.exports = connection;