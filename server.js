var express = require('express');
var router = require('./app/routes');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
let Service = require('./app/models/service');
var flash = require('connect-flash');
var path = require('path');
var multer = require ('multer');
var logger = require('morgan');
var favicon = require ('serve-favicon');
var exphbs = require('express-handlebars');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var http = require('http');
require('rootpath')();

var serviceController = require('./app/controllers/serviceController');
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


var $  = require('jquery');
var jsdom = require("jsdom").jsdom;
var doc = jsdom();
var window = doc.defaultView;
$ = require('jquery')(window);


require('./app/routes.js')(app);



app.listen(3000, function(){
console.log("The app is running on port 3000!!!")

});
