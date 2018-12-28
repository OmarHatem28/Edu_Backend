const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require('express');
const app = express();


app.use(express.json());

app.use('/',home);
app.use('/courses',courses);


app.set('views', __dirname + '/frontend');
app.use(express.static('frontend'));
app.engine('.html', require('ejs').renderFile);




app.listen('3000',() => {
    console.log('listening on port 3000...');
})