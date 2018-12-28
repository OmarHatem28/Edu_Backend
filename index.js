const courses = require('./routes/courses');
const express = require('express');
const app = express();


app.use(express.json());


app.use('/courses',courses);


// app.use(express.static(__dirname + '/frontend'));
// app.set('frontend', __dirname + '/frontend');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

app.listen('3000',() => {
    console.log('listening on port 3000...');
})