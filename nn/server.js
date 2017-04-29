//Express
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

//Passport
var passport = require('passport');
require('./config/passport')(passport); // pass passport for configuration

//Cookie and session
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(session({
  secret: 'this is the secret',
  resave: true,
  saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//Body-parser
var bodyParser = require('body-parser');
app.use('/app', express.static(__dirname + "/app" ));
app.use('/public', express.static(__dirname + "/public" ));
app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
}));

//Load .env file
// var dotenv = require('dotenv');
// dotenv.load();

// routes ======================================================================
require('./routes/auth.js')(app, passport); // load our routes and pass in our app and fully configured passport

app.get('/',function(req, res){
res.sendfile('public/index.html');

});
app.listen(3000);
console.log('server running on port 3000');