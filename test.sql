create database educore;
-- ====================================================================================================
create table User (
	UID int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    email varchar(255),
    password varchar(255),
    isTeacher boolean,
    PRIMARY KEY (UID)
);
create table Course (
	CID int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    category varchar(255) NOT NULL,
    duration int NOT NULL,
    UID int NOT NULL,
    numReview int NOT NULL DEFAULT 0,
    totalRate int NOT NULL DEFAULT 0,
    enrolled int NOT NULL DEFAULT 0,
    playlist varchar(255) NOT NULL,
    description text NOT NULL,
    courseImg blob,
    PRIMARY KEY (CID),
    FOREIGN KEY (UID) REFERENCES User(UID)
);
create table userCourse (
    CUID INT  NOT NULL AUTO_INCREMENT,
    UID INT NOT NULL,
    CID INT NOT NULL,
    PRIMARY KEY (CUID),
	FOREIGN KEY (UID) REFERENCES User (UID),
	FOREIGN KEY (CID) REFERENCES Course (CID)
);
-- ====================================================================================================
-- add user
INSERT INTO user (name, email, password, isTeacher)
VALUES ('Bassem', 'bassem@gmail.com', 159357, false);
-- ====================================================================================================
-- add course
INSERT INTO course (name, category, duration, UID, numReview, totalRate, enrolled)
VALUES ('Android', 'Mobile Development', 20, 1, 0, 0, 0);
-- ====================================================================================================
-- enroll user in course
INSERT INTO userCourse (UID, CID)
VALUES (1, 1);
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