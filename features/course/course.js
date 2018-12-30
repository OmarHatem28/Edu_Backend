let con = require('../../models/db.js');

let methods = {
    saveCourse: function (course, callBackSuccess) {
        console.log(course);

        let saveSql = "INSERT INTO course (CID, name, category, duration, UID, numReview, totalRate, enrolled, playlist, description) VALUES ?";

        /**
         * TODO: replace constant user id to put current login user id.
         */

        let newCourse = [
            [0, course.name, course.category, course.duration, JSON.parse(global.myCookie.toString()).UID, 0, 0, 3, course.playlist, course.description]
        ];
        con.query(saveSql, [newCourse], function (err, result) {
            if (err) throw err;
            console.log("WTF    "+result);
            callBackSuccess(result);
        });
    }
};

exports.methods = methods;