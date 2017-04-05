var express    =    require('express');
var app        =    express();
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var session = require('express-session');
var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reservation');
var db = mongoose.connection;


var routes = require('./routes/main.js');

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

//
app.use('/', routes);


app.listen(3000, function(){
console.log("The app is running on port 3000!!!")
});
