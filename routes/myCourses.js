const express = require('express');
const db = require('../models/db');
const router = express.Router();


router.get('/', (req, res) => {
    if ( global.myCookie ){
        var sql = "SELECT * FROM course JOIN userCourse ON course.CID = userCourse.CID WHERE userCourse.UID = "+JSON.parse(global.myCookie.toString()).UID+";";
        db.query(sql, function (err, result) {
            if (err) throw err;
            if ( JSON.parse(global.myCookie.toString()).isTeacher == 1 ){
                var sql2 = "SELECT * FROM course WHERE course.UID = "+JSON.parse(global.myCookie.toString()).UID+";";
                console.log(sql2);
                db.query(sql2, function (err, result2) {
                    if (err) throw err;
                    res.render('myCourses.html', { viewed: result, instruct: result2, info: JSON.parse(global.myCookie.toString())} );
                    // res.render('myCourses.html', { viewed: result, instruct: result2 });
                    // res.send(result);
                });
            }
            else {
                res.render('myCourses.html', { viewed: result, instruct: [], info: JSON.parse(global.myCookie.toString())} );
            }
        });
    } else {
        res.redirect('/');
    }
})

router.get('/enroll/:CID', (req, res) => {
    if ( global.myCookie ){
        const userID = JSON.parse(global.myCookie.toString()).UID;
        var PK = req.params.CID+userID;
        var sql = "INSERT INTO userCourse (CUID, UID, CID) VALUES ('"+PK+"', "+userID+", "+req.params.CID+");";
        db.query(sql, function (err, result) {
            // if (err) throw err;
            res.redirect("/");
        });
    } else {
        res.redirect('/');
    }
})

module.exports = router;