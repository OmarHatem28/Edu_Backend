let con = require('../../models/db.js');

let methods = {
    saveUser: function (user, callBackSuccess, callBackFail) {
        console.log(user);

        let selectSql = "SELECT * FROM User WHERE email = ?"
        let saveSql = "INSERT INTO User(name, email, password, isTeacher) VALUES ?";

        let userNotExists = function () {
            user.isTeacher = (user.isTeacher === 'on');
            let newUser = [
                [user.userName, user.email, user.password, user.isTeacher]
            ];
            con.query(saveSql, [newUser], function (err, result) {
                if (err) throw err;
                callBackSuccess(result);
            });
        };

        con.query(selectSql, user.email, function (err, result) {
            if (err) throw err;
            if (result !== undefined && result.length > 0) {
                callBackFail('User with the same email already exists.');
            } else {
                userNotExists();
            }
        });
    },

    chechUser: function ( user, callBackSuccess, callBackFail) {
        let selectSql = "SELECT * FROM User WHERE email = '"+user.email+"'";
        con.query(selectSql, function (err, result) {
            if (err) throw err;
            if (result !== undefined && result.length > 0 && result[0].password == user.password ) {
                callBackSuccess(result);
            } else {
                callBackFail('User Not Registered.');
            }
        });
    }
};

exports.methods = methods;