var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');
var path = require('path');
var multer = require ('multer');
var logger = require('morgan');
var favicon = require ('serve-favicon');
var exphbs = require('express-handlebars');
var mongo = require('mongodb');
var http = require('http');
require('rootpath')();
var serviceController = require('./app/controllers/serviceController');
var userController = require('./app/controllers/userController');
let Service = require('./app/models/service');
var passport = require('passport');
var nodemailer = require("nodemailer");
var complaintController = require('./app/controllers/complaintController');
var reviewController = require('./app/controllers/reviewController');

mongoose.connect('mongodb://localhost/milestone');
var db = mongoose.connection;


require('./config/passport')(passport);


//app.use(express.static(path.join(__dirname, 'public')));
app.use('/app', express.static(__dirname + "/app" ));
app.use('/public', express.static(__dirname + "/public" ));
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/public'));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({secret: 'anystringoftext',
                  saveUninitialized: true,
                  resave: true}));


app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
//app.use(morgan('dev'));




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

app.get('/',function(req, res){
res.sendfile('public/index.html');

});

app.post('/api/search', serviceController.getServiceByKeyword,function(req, res){

});

app.post('/api/searchByCategory', serviceController.getServiceByCategory,function(req, res){

});

app.post('/api/searchByLocation', serviceController.getServiceByLocation,function(req, res){

 });

app.post('/api/searchByDate', serviceController.getServiceByDate,function(req, res){

  });
app.post('/api/searchByOffers', serviceController.getServiceByOffer,function(req, res){

    });
app.post('/api/searchByRating', serviceController.getServiceByRating,function(req, res){

      });

app.get('/api/serviceslist',serviceController.getAllServices,function(req, res){

});

app.get('/api/service/:id', function(req, res){
console.log(req.body);

Service.find({_id:req.params.id},function(err, service){

if(err)
  res.send(err.message)
else
  res.json(service);

});
});


///nadeen

app.post('/api/addService', serviceController.createService,function(req, res){

      });
app.put('/api/updateService', serviceController.updateService,function(req, res){

      });
app.get ('/api/deleteService', serviceController.deleteService, function(req,res){

});

//



  app.get('/update', function(req, res){
	res.render('updateInfo.ejs');
  });




//youssef
  app.post('/createComplaint', complaintController.createComplaint, function(req, res){
    res.render('complains.ejs');
  });

  app.post('/createReview', reviewController.createReview, function(req, res){
    res.render('reviews.ejs');
  });

/////
//ahmed

 app.get('/rezk',function(req, res){
	  res.render('xyz.ejs');

	});

	app.get('/services',serviceController.getAllServices,function(req, res){
	  res.render('index2.ejs');

	});

	app.get('/service',serviceController.getDetails,function(req, res){
	  res.render('sprofile.ejs');

	});


//merna


app.get('/signupSP', function(req, res){
        res.render('signupSP.ejs', { message: req.flash('signupMessage') });
    });
  app.post('/signupSP', passport.authenticate('local-signup2', {
        successRedirect: '/',
        failureRedirect: '/signupSP',
        failureFlash: true
    }));

  app.get('/index', function(req, res){
        res.render('page.ejs', { message: req.flash('signupMessage') });
    });

    app.get('/page', function(req, res){
        res.render('page.ejs');
    });

    app.get('/login', function(req, res){
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    }));

    app.get('/signup', function(req, res){
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    app.get('/profile', isLoggedIn, function(req, res){
        res.render('profile.ejs', { user: req.user });
    });





    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });


function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }

    res.redirect('/login');

};
//Kareem Angular

app.post('/api/rating', serviceController.updateRating,function(req, res){

          });

app.listen(3000, function(){
console.log("The app is running on port 3000!!!")

});
