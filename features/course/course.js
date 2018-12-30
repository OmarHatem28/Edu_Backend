let con = require('../../models/db.js');

let methods = {
    saveCourse: function (course, callBackSuccess) {
        console.log(course);

        let saveSql = "INSERT INTO Course(name, category, duration, UID, playlist, description, courseImg) VALUES ?";

        /**
         * TODO: replace constant user id to put current login user id.
         */

        let newCourse = [
            [course.name, course.category, course.duration, 1, course.playlist, course.description, course.image]
        ];
        con.query(saveSql, [newCourse], function (err, result) {
            if (err) throw err;
            callBackSuccess(result);
        });
    }
};

exports.methods = methods;