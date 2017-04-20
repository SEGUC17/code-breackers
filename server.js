var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require("path");
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/m2');
var db = mongoose.connection;

var engines = require('consolidate');
app.set('views', path.join(__dirname, '/public/views'));
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname+'/public'));

var routes = require('./app/routes.js');
app.use('/', routes);

app.listen(3000);

console.log('Magic happends on port 3000!!');
exports= module.export=app;
