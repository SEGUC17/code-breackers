var express = require('express');
var router = express.Router();
var complaintController = require('/home/youssef/Desktop/folder/app/controllers/complaintController.js');
var reviewController = require('/home/youssef/Desktop/folder/app/controllers/reviewController.js');
module.exports = router;

module.exports = function(app){


	app.get('/',function(req, res){
	  res.render('complains.ejs');

	});
  app.get('/addreview',function(req, res){
	  res.render('reviews.ejs');

	});

  app.post('/createComplaint', complaintController.createComplaint, function(req, res){
    res.render('complains.ejs');

  });
  app.post('/createReview', reviewController.createReview, function(req, res){
    res.render('reviews.ejs');

  });






};
