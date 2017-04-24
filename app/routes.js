var User = require('./models/user');
var express = require('express');
var router = express.Router();
var complaintController = require('../app/controllers/complaintController.js');
var Reservation = require('../app/models/reservation');
var reviewController = require('../app/controllers/reviewController.js');
var serviceController = require('../app/controllers/serviceController');
//var upload = multer ({ dest:'public/uploads'});
var multer = require ('multer');
var randomstring=require("randomstring");
var nodemailer = require("nodemailer");
var stripe = require('stripe')("sk_test_oO9wPOhBy3DEKDDYsulIKeOL");



var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'kareemabdelaziz771996@gmail.com',
        pass: 'killer8kman'
    },
    tls: {rejectUnauthorized: false},
    debug:true
});
//module.exports = emailController;



// router.get('/',function(req, res){
// 	  res.render('complains.ejs');
// 	});
//
// router.get('/addreview',function(req, res){
// 	  res.render('reviews.ejs');
// 	});


//get service route
router.get('service'){
  console.log("service.html");
};


//nadeen
router.get('/addservice', function(req, res){
   console.log("addservice");
   res.render('addservice');
});



router.get('/images', function(req, res, next) {
     res.render('images', { title: 'Express' });
});


router.get('/addservice', function(req, res){
   res.render('addservice');
   console.log("addservice");
});

//kareem

// router.get('/index',function(req,res){
// 	res.sendfile('views/index.html');
// });


router.get('/send',function(req,res){
	var mailOptions={
		to : req.query.to,
		subject : req.query.subject,
		text : req.query.text
	}
	console.log(mailOptions);
	smtpTransport.sendMail(mailOptions, function(error, response){
   	 if(error){
        	console.log(error);
		res.end("error");
	 }else{
        	console.log("Message sent: " + response.message);
		res.end("sent");
    	 }
});
});


//nadeen
router.put('/AS',serviceController.createService);

router.put('/updateservice',function(req, res) {
	    var serviceName = req.body.serviceName;
	    var description = req.body.description;
	    var address = req.body.address;
	    var price = req.body.price;
            var location = req.body.location;
            var category = req.body.category;
            var workingdays = req.body.workingdays;
	    var beginWorkingHours = req.body.beginWorkingHours;
	    var endWorkingHours = req.body.endWorkingHours;
            var offerDescription = req.body.offerDescription;

	    mongoose.model('service').findById(req.id, function (err, services) {
	        services.update({
	            serviceName : serviceName,
	            description : description,
	            address : address,
	            price : price,
              location : location,
              category : category,
		          beginWorkingHours : beginWorkingHours,
		          endWorkingHours : endWorkingHours,
	            offerDescription : offerDescription,

	        })

          if (services.offerDescription = ""){
          services.currentOffers == false;
        }
            else if (services.offerDescription !== ""){
          services.currentOffers == true;
        }



      });
}),


router.delete('/:id/edit', function (req, res){
    mongoose.model('service').findById(req.id, function (err, service) {
        if (err) {
            return console.error(err);
        } else {
            service.remove(function (err, service) {
                if (err) {
                    return console.error(err);
                } else {
                    console.log('DELETE removing ID: ' + service._id);
                    res.format({
                          html: function(){
                               res.redirect("/serviceView");
                         },
                        json: function(){
                               res.json({message : 'deleted',
                                   item : service
                               });
                         }
                    });
                }
            });
        }
    });
});



	//kareem


router.post('/rate', function(req, res){
  var serviceName = req.body.rating;
	var rating = req.body.rating;

console.log(serviceName);

service.findOne({serviceName:req.body.serviceName},function(err,service2){

				var currRating = service2.rating;
        var avg = currRating+rating/2;
        service2.rating = avg;

				service.changeRating(service2, function(err, service){

				if(err) throw err;
				console.log(service2);

				});

				if (!(service)){

				console.log("not a rating");
				}


			});
      });




module.exports = router;
