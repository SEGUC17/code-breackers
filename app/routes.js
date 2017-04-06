var express = require('express');
var router = express.Router();
var serviceController = require('./controllers/serviceController');

module.exports = router;


module.exports = function(app){


	app.get('/',function(req, res){
	  res.render('xyz.ejs');

	});

	

	app.post('/createService',serviceController.createService,function(req, res){
		res.render('xyz.ejs');

	});

	app.get('/services',serviceController.getAllServices,function(req, res){
	  res.render('index2.ejs');

	});

		app.get('/service',serviceController.getDetails,function(req, res){
	  res.render('sprofile.ejs');

	});

	



};

