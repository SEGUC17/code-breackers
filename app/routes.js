var express = require('express');
var router = express.Router();
var serviceController = require('./controllers/serviceController');

module.exports = router;


module.exports = function(app){


	app.get('/',function(req, res){
	  res.render('index.ejs');

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



};
