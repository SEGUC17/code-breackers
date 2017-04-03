var express = require('express');
var router = require('./app/routes');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/platform";
var cookieParser = require('cookie-parser');
var session = require('express-session');
let Service = require('./app/models/service');


var serviceController = require('./app/controllers/serviceController')

var $  = require('jquery');
var jsdom = require("jsdom").jsdom;
var doc = jsdom();
var window = doc.defaultView;
$ = require('jquery')(window);
