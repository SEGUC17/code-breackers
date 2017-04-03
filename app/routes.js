var express = require('express');
var router = express.Router();

module.exports = router;


module.exports = function(app){

	app.get('/',function(req, res){
		res.render('index.ejs');

	});

	app.get('/Category1',function(req, res){
	  res.render('index.ejs');

	});


	app.post('/createService',serviceController.createService,function(req, res){
	  res.render('index.ejs');

	});

};
