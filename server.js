var express    =    require('express');
var app        =    express();
var bodyParser = require('body-parser');
var path = require('path');
var session =require('express-session');
var cookieParser = require('cookie-parser');
var multer = require ('multer');
var logger = require('morgan');
var path = require ('path');
var favicon = require ('serve-favicon');
var exphbs = require('express-handlebars');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var http = require('http');
require('rootpath')();


var router = require('app/routes.js');

mongoose.connect('mongodb://localhost/milestone');
var db = mongoose.connection;
var app = express();
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({ secret: "secrett", resave: false, saveUninitialized: true }));
app.use(cookieParser());
app.use(router);

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

app.listen(3000, function(){
console.log("The app is running on port 3000!!!")
});
