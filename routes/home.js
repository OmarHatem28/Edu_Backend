const express = require('express');
const db = require('../models/db');
const router = express.Router();


router.get('/', (req, res) => {
    var sql = "select * from course";
    db.query(sql, function (err, result) {
        if (err) throw err;
        var categories = [];
        result.forEach(element => {
            categories.push(element.category);
        });
        var uniq =  [ ... new Set(categories) ];
        console.log(uniq);
        if ( global.myCookie )
            res.render('index.html', { results: result, categories: uniq, info: JSON.parse(global.myCookie.toString())} );
        else
            res.render('index.html', { results: result, categories: uniq, info: "" } );
        // res.render('index.html', { results: result, info: "" } );
        // res.send(result);
    });
})

module.exports = router;