var express = require('express');
var router = express.Router();
var serviceController = require('./controllers/serviceController');

module.exports = router;


module.exports = function(app){


	app.get('/',function(req, res){
	  res.render('index.ejs');

	});

	app.get('/serviceController.js', function (req, res) {
	    res.render('index.ejs');
	});

	app.post('/createService',serviceController.createService,function(req, res){
		res.render('index.ejs');

	});

	app.get('/Category1',serviceController.getServiceByCategory,function(req, res){
		res.render('index1.ejs');

	});

	app.get('/Location1',serviceController.getServiceByLocation,function(req, res){
		res.render('index1.ejs');

	});


	app.get('/Date',serviceController.getServiceByDate,function(req, res){
		res.render('index1.ejs');

	});

	app.get('/Offers',serviceController.getServiceByOffer,function(req, res){
		res.render('index1.ejs');

	});



};
