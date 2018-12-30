const express = require('express');
const router = express.Router();
var user = require('./user.js');

router.post('/register', (req, res) => {
    var queryDoneSuccess = function (result) {
        console.log(result);
    };
    var queryDoneFail = function (errMessage) {
        console.log(errMessage);
    };
    user.methods.saveUser(req.body, queryDoneSuccess, queryDoneFail);
});

module.exports = router;