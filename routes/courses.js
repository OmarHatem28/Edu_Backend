const express = require('express');
const db = require('../models/db');
const router = express.Router();
var course = require('../features/course/course.js');

router.get('/', (req, res) => {
    var sql = "select * from course";
    db.query(sql, function (err, result) {
        if (err) throw err;
        res.render('courses.html', { results: result});
        // res.send(result);
    });
});

router.get('/addCourse', (req, res) => {
    res.render('addCourse.html');
});

router.post('/addCourse', (req, res) => {
    var queryDoneSuccess = function (result) {
        console.log(result);
    };
    course.methods.saveCourse(req.body, queryDoneSuccess);
});

module.exports = router;