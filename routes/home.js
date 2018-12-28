const express = require('express');
const db = require('../models/db');
const router = express.Router();


router.get('/', (req, res) => {
    var sql = "select * from course";
    db.query(sql, function (err, result) {
        if (err) throw err;
        res.render('index.html', result);
        // res.send(result);
    });
})

router.get('/1', (req, res) => {
    res.send('Bye');
})

module.exports = router;