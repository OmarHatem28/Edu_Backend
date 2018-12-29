const express = require('express');
const db = require('../models/db');
const router = express.Router();


router.get('/', (req, res) => {
    var sql = "SELECT * FROM course JOIN userCourse ON course.CID = userCourse.CID WHERE userCourse.UID = 1;";
    db.query(sql, function (err, result) {
        if (err) throw err;
        res.render('myCourses.html', { results: result});
        // res.send(result);
    });
})


module.exports = router;