var express = require('express');
var router = express.Router();
var serviceController = require('./controllers/serviceController');
//var upload = multer ({ dest:'public/uploads'});
var multer = require ('multer');
var Reservation = require('../app/models/reservation');
var randomstring=require("randomstring");
var Service = require('../app/models/service');

//nadeen


router.get('/addservice', function(req, res){
   console.log("addservice");
   res.render('addservice');
});

router.get('/betngan',serviceController.getMyService);


router.get('/images', function(req, res, next) {
     res.render('images', { title: 'Express' });
});


router.get('/addservice', function(req, res){
   res.render('addservice');
   console.log("addservice"); 
});


router.get('/viewservice', serviceController.getAllServices, function (req , res){
   console.log("haygeb el service");
 });


//sarah & omar
router.get('/reserve', function(req,res){
res.render('reserve.html', {title: "Reservation"})
});


//omar
router.get('/change', function(req,res){
res.render('change.html', {title: "Change Reservation"})
});


//sarah
router.get('/delete', function(req,res){
res.render('delete.html', {title: "Delete Reservation"})
});

router.get('/promo', function(req,res){
res.render('promo.html', {title: "Create PromoCode"})
});


//nadeen
router.post('/AS',serviceController.createService);


router.post('/myservice',function(req, res, next) {
  res.redirect('betngan'); });


//router.post('/images', upload.any(),function(req, res, next) {
//    res.send(req.files); });


router.put('/updateservice',function(req, res) {
	    var serviceName = req.body.serviceName;
	    var description = req.body.description;
	    var address = req.body.address;
	    var price = req.body.price;
      var location = req.body.location;
      var category = req.body.category;
      var workingdays = req.body.workingdays;
      var offer = req.body.offer;

	    mongoose.model('service').findById(req.id, function (err, services) {
	        service.update({
	            serviceName : serviceName,
	            description : description,
	            address : address,
	            price : price,
              location : location,
              category : category

	        }, function (err, serviceID) {
	          if (err) {
	              res.send("There was a problem updating the information to the database: " + err);
	          }
	          else {
	                  res.format({
	                      html: function(){
	                           res.redirect("/serviceview/" + service._id);
	                     },
	                    json: function(){
	                           res.json(service);
	                     } 
                 });
            } 
          })
      });
});


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

// sarah and omar 
router.post('/reserve', function(req, res){
	var userName = req.body.userName;
	var serviceName = req.body.serviceName;
	var begin_work = req.body.begin_work;
	var end_work = req.body.end_work;
	var working_days = req.body.working_days;
	var reservation_date = req.body.reservation_date;
	var reservation_hour = req.body.reservation_hour;
        console.log(userName); 

		var newReservation = new Reservation({
			userName: userName,
			serviceName: serviceName,
			begin_work: begin_work,
			end_work: end_work,
			working_days: working_days,
			reservation_date: reservation_date,
			reservation_hour: reservation_hour
		});


		Reservation.findOne({serviceName:req.body.serviceName, reservation_date: req.body.reservation_date, reservation_hour:
				req.body.reservation_hour},function(err,trackReservation){
				if(trackReservation){

									
				console.log("Reserved!");
			}
				if (!(trackReservation)){
					Reservation.createReservation(newReservation, function(err, Reservation){
				if(err) throw err;

				console.log(Reservation);
				});
				}

			});
			

});

//omar

router.post('/change', function(req, res){
	var userName = req.body.userName;
	var serviceName = req.body.serviceName;
	var old_reservation_date = req.body.old_reservation_date;
	var old_reservation_hour = req.body.old_reservation_hour;
	var new_reservation_date = req.body.new_reservation_date;
	var new_reservation_hour = req.body.new_reservation_hour;
        console.log(userName); 
		
		Reservation.findOne({userName:req.body.userName,serviceName:req.body.serviceName,reservation_date: req.body.old_reservation_date,reservation_hour:
				req.body.old_reservation_hour},function(err,trackReservation2){
				if(trackReservation2){
				
				trackReservation2.reservation_hour = req.body.new_reservation_hour;
				trackReservation2.reservation_date = req.body.new_reservation_date;

				Reservation.changeReservation(trackReservation2, function(err, Reservation){
				if(err) throw err;

				console.log(Reservation);
				});

				console.log(trackReservation2);
				console.log("changed!");
			}
				if (!(trackReservation2)){

				console.log("no such reservation");
				}

			});
				

		
});

//sarah


router.post('/delete', function(req, res){
	var userName = req.body.userName;
	var serviceName = req.body.serviceName;
	var reservation_date = req.body.reservation_date;
	var reservation_hour = req.body.reservation_hour;

		Reservation.findOne({userName:req.body.userName,serviceName:req.body.serviceName,reservation_date: req.body.reservation_date,reservation_hour:
				req.body.reservation_hour},function(err,trackReservation3){
				if(trackReservation3){
				Reservation.deleteReservation(trackReservation3, function(err){
      				console.log("Deleted!");
			});
				 } 

				if (!(trackReservation3)){
				
				console.log("No such reservation");


			}});});


router.post('/promo',function(req,res){
var promo= randomstring.generate(7);
console.log(promo);

});


	



module.exports = router;



