const express = require('express');
const db = require('../models/db');
const router = express.Router();


router.get('/', (req, res) => {
    var sql = "select * from course";
    db.query(sql, function (err, result) {
        if (err) throw err;
        res.render('courses.html', { results: result});
        // res.send(result);
    });
})


module.exports = router;