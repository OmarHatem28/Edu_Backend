const express = require('express');
const path = require("path");
const router = express.Router();


router.get('/', (req, res) => {
    var sql = "select * from course";
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
        // res.render(html page, result) then in html {{ result.name }} and so on
    });
})

router.get('/1', (req, res) => {
    res.send('Bye');
})

module.exports = router;