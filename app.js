var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/Ahmed';
MongoClient.connect(url, function(err, db) {
  console.log("Connected");
     db.close()
});
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/Ahmed';

MongoClient.connect(url, function(err, db) {

    db.collection('Services').insertOne({
        Serviceid: 1,
        ServiceName: "Breakout"
    });
}); 

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/Ahmed';

MongoClient.connect(url, function(err, db) {

    var cursor =db.collection('Services').find( );

    cursor.each(function(err, doc) {

        console.log(doc);

    });
});
var express= require('express');

var app=express();
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost/Ahmed';

var str="";

app.route('/ServiceName').get(function(req,res) 
{
  MongoClient.connect(url, function(err, db) {
    var cursor =db.collection('Services').find( );

    cursor.each(function(err, item) {
      if(item != null) {
        str = str + "&nbsp;&nbsp;&nbsp;&nbsp;Service Name&nbsp;&nbsp;" + item.ServiceName + "</br>";
      }});

    res.send(str);
    }); });
var server=app.listen(3000,function()
  {});