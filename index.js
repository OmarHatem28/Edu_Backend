const mysql = require('mysql');
const courses = require('./routes/courses');
const express = require('express');
const app = express();
app.use(express.json());

global.con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "159357",
    database: "educore",
    // insecureAuth : true
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to DataBase!");
  });

app.use('/courses',courses);


app.use(express.static(__dirname + '/frontend'));
app.set('frontend', __dirname + '/frontend');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.listen('3000',() => {
    console.log('listening on port 3000...');
})