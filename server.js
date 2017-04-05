var express = require('express');
var router = require('./app/routes');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/platform";
var cookieParser = require('cookie-parser');
var session = require('express-session');
let Service = require('./app/models/service');


var serviceController = require('./app/controllers/serviceController');



mongoose.connect(DB_URI);
//app.use(router);
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/public'));
app.use(cookieParser());
app.use(session({secret: 'anystringoftext',
         saveUninitialized: true,
         resave: true}));

app.set('views', 'views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


require('./app/routes.js')(app);

app.get('/',function(req, res){
    res.render('index.ejs');

  });

  



app.listen('3000', function (){
    console.log("Listening for Local Host 3000");
});