const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let routes = require(path.join(__dirname, 'routes', 'index'));

var app = express();

// Configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(3000, function() {
    console.log('Server started on port 3000');
});