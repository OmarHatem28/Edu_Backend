const express = require('express');
const db = require('../models/db');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('adminLogin.html');
})

router.get('/home', (req, res) => {
    res.render('admin.html', { results: ""});
})


router.get('/courses', (req, res) => {
    var sql = "select * from course";
    db.query(sql, function (err, result) {
        if (err) throw err;
        res.render('admin.html', { results: result});
        // res.send(result);
    });
})

router.get('/deleteCourse/:CID', (req, res) => {
    // console.log(req.params.CID);
    var sql = "DELETE FROM userCourse WHERE CID = '"+req.params.CID+"'";
    db.query(sql, function (err, result) {
        if (err) throw err;
        var sql2 = "DELETE FROM course WHERE CID = '"+req.params.CID+"'";
        db.query(sql2, function (err, result) {
            if (err) throw err;
            res.render('admin.html', { results: ""});
            // res.send(result);
        });
    });
})

module.exports = router;