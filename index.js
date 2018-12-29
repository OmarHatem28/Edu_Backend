const courses = require('./routes/courses');
const home = require('./routes/home');
const myCourses = require('./routes/myCourses');
const admin = require('./routes/admin');
const user = require('./features/user/index.js');
const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded());

app.use('/',home);
app.use('/courses',courses);
app.use('/myCourses',myCourses);
app.use('/admin',admin);
app.use('/user', user);

app.set('views', __dirname + '/frontend');
app.use(express.static('frontend'));
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
// app.set('view engine', 'html');




app.listen('3000',() => {
    console.log('listening on port 3000...');
})