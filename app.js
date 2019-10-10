var express = require('express');
var path = require('path');
let routes = require(path.join(__dirname, 'routes', 'index'));

var app = express();

// Configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(3000, function() {
    console.log('Server started on port 3000');
});