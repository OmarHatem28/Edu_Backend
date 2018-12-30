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


module.exports = router;