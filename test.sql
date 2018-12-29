create database educore;
-- ====================================================================================================
create table User (
	UID int,
    name varchar(255),
    email varchar(255),
    password varchar(255),
    isTeacher boolean
    );
-- ====================================================================================================
create table Course (
	CID int,
    name varchar(255),
    category varchar(255),
    duration int,
    UID int,
    FOREIGN KEY (UID) REFERENCES User(UID)
    );
-- ====================================================================================================
create table userCourse (
    UID INT NOT NULL,
    CID INT NOT NULL,
    CUID INT NOT NULL UNIQUE,
    PRIMARY KEY (CUID),
	FOREIGN KEY (UID) REFERENCES User (UID),
	FOREIGN KEY (CID) REFERENCES Course (CID)
);
-- ====================================================================================================
-- add user
INSERT INTO user (UID, name, email, password, isTeacher)
VALUES (0, 'Bassem', 'bassem@gmail.com', 159357, false);
-- ====================================================================================================
-- add course
INSERT INTO course (CID, name, category, duration, UID, numReview, totalRate, enrolled)
VALUES (0, 'Android', 'Mobile Development', 20, 1, 0, 0, 0);
-- ====================================================================================================
-- enroll user in course
INSERT INTO userCourse (CUID, UID, CID)
VALUES ('23', 2, 3);
-- ====================================================================================================
select * from course;
select * from user;
select * from userCourse;
-- ====================================================================================================
-- get user's courses
SELECT * FROM course JOIN userCourse ON course.CID = userCourse.CID
WHERE userCourse.UID = 1;
-- ====================================================================================================
-- get users enrolled in this course
SELECT * FROM user JOIN userCourse ON user.UID = userCourse.UID
WHERE userCourse.CID = 5;