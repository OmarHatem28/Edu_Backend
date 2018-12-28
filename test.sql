create database educore;

create table User (
	UID int,
    name varchar(255),
    email varchar(255),
    password varchar(255),
    isTeacher boolean
    );
    
create table Course (
	CID int,
    name varchar(255),
    category varchar(255),
    duration int,
    UID int,
    FOREIGN KEY (UID) REFERENCES User(UID)
    );


select * from course;

INSERT INTO user (UID, name, email, password, isTeacher)
VALUES (0, 'Omar', 'omar@gmail.com', 159357, true);

INSERT INTO course (CID, name, category, duration, UID)
VALUES (0, 'Django', 'BackEnd', 10, 1);