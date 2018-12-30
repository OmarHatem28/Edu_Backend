const express = require('express');
const db = require('../models/db');
const router = express.Router();
var course = require('../features/course/course.js');
var cookie = require('cookie');


router.get('/', (req, res) => {
    var sql = "select * from course";
    db.query(sql, function (err, result) {
        if (err) throw err;
        if ( global.myCookie )
            res.render('courses.html', { results: result, info: JSON.parse(global.myCookie.toString())} );
        else
            res.render('courses.html', { results: result, info: "" } );
        // res.render('courses.html', { results: result});
        // res.send(result);
    });
});

router.post('/addCourse', (req, res) => {
    if ( global.myCookie ){
        var queryDoneSuccess = function (result) {
            res.redirect("/");
        };
        course.methods.saveCourse(req.body, queryDoneSuccess);
    } else {
        res.redirect("/");
    }
});

module.exports = router;