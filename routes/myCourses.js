const express = require('express');
const db = require('../models/db');
const router = express.Router();


router.get('/:isTeacher', (req, res) => {
    if ( req.params.isTeacher == "1" ){
        var sql = "SELECT * FROM course JOIN userCourse ON course.CID = userCourse.CID WHERE userCourse.UID = 1;";
        db.query(sql, function (err, result) {
            if (err) throw err;
            var sql2 = "SELECT * FROM course WHERE course.UID = 1;";
            db.query(sql2, function (err, result2) {
                if (err) throw err;
                res.render('myCourses.html', { viewed: result, instruct: result2 });
                // res.send(result);
            });
        });
    } else {
        var sql = "SELECT * FROM course JOIN userCourse ON course.CID = userCourse.CID WHERE userCourse.UID = 1;";
        db.query(sql, function (err, result) {
            if (err) throw err;
            res.render('myCourses.html', { viewed: result, instruct: [] });
            // res.send(result);
        });
    }
})

router.get('/addCourse', (req, res) => {
    res.render('addCourse.html');
})

module.exports = router;