const express = require('express');
const db = require('../models/db');
const router = express.Router();


router.get('/', (req, res) => {
    var sql = "select * from user where isTeacher = 1";
    db.query(sql, function (err, result) {
        if (err) throw err;
        if ( global.myCookie )
            res.render('instructors.html', { results: result, info: JSON.parse(global.myCookie.toString())} );
        else
            res.render('instructors.html', { results: result, info: "" } );
        // res.render('instructors.html', { results: result});
        // res.send(result);
    });
})

router.get('/profile/:UID', (req, res) => {
    var sql = "select * from course where UID = '"+req.params.UID+"'";
    db.query(sql, function (err, result) {
        if (err) throw err;
        var sql2 = "select * from user where UID = '"+req.params.UID+"'";
        db.query(sql2, function (err, result2) {
            if (err) throw err;
            console.log(result2);
            if ( global.myCookie )
                res.render('instructorProfile.html', { results: result, profile: result2[0], info: JSON.parse(global.myCookie.toString())});
            else
                res.render('instructorProfile.html', { results: result, profile: result2[0], info: ""});
            // res.send(result);
        });
    });
})

module.exports = router;