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


var nodemailer = require("nodemailer");  

var serviceController = require('./app/controllers/serviceController');

mongoose.connect('mongodb://localhost/milestone');
var db = mongoose.connection;

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

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "kareemabdelaziz771996@gmail.com",
        pass: "killer8kman"
    },
    tls: {rejectUnauthorized: false},
    debug:true
});


//layla
	app.get('/search',function(req, res){
	  res.render('index.ejs');
	});

	app.get('/Date',serviceController.getServiceByDate,function(req, res){
		console.log(req.body);
		res.render('FilteredServices.ejs');
	});

	app.get('/Offers',serviceController.getServiceByOffer,function(req, res){
		res.render('FilteredServices.ejs');
	});

	app.get('/Rating',serviceController.getServiceByRating,function(req, res){
		res.render('FilteredServices.ejs');

	});

	app.get('/searchByKeyword',serviceController.getServiceByKeyword,function(req, res){
 	 res.render('FilteredServices.ejs');

  });

    app.post('/createService',serviceController.createService,function(req, res){
		res.render('index.ejs');

	});

	app.post('/getCategory',serviceController.getServiceByCategory,function(req, res){
		res.render('FilteredServices.ejs');

	});

	app.post('/getLocation',serviceController.getServiceByLocation,function(req, res){
		console.log(req.body);
		res.render('FilteredServices.ejs');
	});

/////

app.listen(3000, function(){
console.log("The app is running on port 3000!!!")

});
