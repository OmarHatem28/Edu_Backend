var mysql = require('mysql');
var db;

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "159357",
            database: "educore"
        });

        db.connect(function(err){
            if(!err) {
                console.log('Connected to DataBase!');
            } else {
                console.log(err);
                console.log('Error connecting to database!');
            }
        });
    }
    return db;
}

module.exports = connectDatabase();