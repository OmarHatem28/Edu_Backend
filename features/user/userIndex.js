const express = require('express');
const router = express.Router();
var user = require('./user.js');
let db = require('../../models/db.js');


router.post('/register', (req, res) => {
    var queryDoneSuccess = function (result) {
        var sql = "select * from course";
        db.query(sql, function (err, courses) {
            if (err) throw err;
            res.render('index.html', { results: courses} );
            // res.send(courses);
        });
    };
    var queryDoneFail = function (errMessage) {
        var sql = "select * from course";
        db.query(sql, function (err, courses) {
            if (err) throw err;
            res.render('index.html', { results: courses} );
            // res.send(courses);
        });
        console.log(errMessage);
    };
    user.methods.saveUser(req.body, queryDoneSuccess, queryDoneFail);
});

router.post('/login', (req, res) => {
    var queryDoneSuccess = function (result) {
        var sql = "select * from course";
        db.query(sql, function (err, courses) {
            if (err) throw err;
            res.render('index.html', { results: courses} );
            // res.send(courses);
        });
    };
    var queryDoneFail = function (errMessage) {
        var sql = "select * from course";
        db.query(sql, function (err, courses) {
            if (err) throw err;
            res.render('index.html', { results: courses} );
            // res.send(courses);
        });
        console.log(errMessage);
    };
    console.log(req.body);
    user.methods.chechUser(req.body, queryDoneSuccess, queryDoneFail);
});

module.exports = router;