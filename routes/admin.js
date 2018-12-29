const express = require('express');
const db = require('../models/db');
const router = express.Router();


router.get('/', (req, res) => {
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

router.get('/addCourse', (req, res) => {
    res.render('addCourse.html');
})

module.exports = router;