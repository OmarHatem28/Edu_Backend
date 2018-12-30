const express = require('express');
const router = express.Router();
var user = require('./user.js');
let db = require('../../models/db.js');
var cookie = require('cookie');


router.post('/register', (req, res) => {
    var queryDoneSuccess = function (result) {
        var sql = "select * from course";
        db.query(sql, function (err, courses) {
            if (err) throw err;
            res.redirect('/');
            // res.render('index.html', { results: courses} );
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
            res.setHeader('Set-Cookie', cookie.serialize('myCookie', JSON.stringify({name: result[0].name, UID: result[0].UID, email: result[0].email, isTeacher: result[0].isTeacher}) , {
                httpOnly: true,
                maxAge: 60 * 60 // 1 hour
            }));
            var cookies = cookie.parse(req.headers.cookie || '');
            global.myCookie = cookies.myCookie;
            // console.log(JSON.parse(myCookie.toString()).email);
            res.redirect("http://localhost:3000");
            // res.send(courses);
        });
    };
    var queryDoneFail = function (errMessage) {
        var sql = "select * from course";
        db.query(sql, function (err, courses) {
            if (err) throw err;
            res.redirect("http://localhost:3000");
            // res.send(courses);
        });
        console.log(errMessage);
    };
    console.log(req.body);
    user.methods.chechUser(req.body, queryDoneSuccess, queryDoneFail);
});

module.exports = router;