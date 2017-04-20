var express = require('express');
var router = express.Router();
var Reservation = require('../app/models/reservation');
var randomstring=require("randomstring");

router.get('/', function(req,res){
res.render('reservation.html', {title: "Reservation"})
});

router.get('/reserve', function(req,res){
res.render('reserve.html', {title: "Reservation"})
});

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
					res.redirect('/reservationBooked');
			}
				if (!(trackReservation)){
					Reservation.createReservation(newReservation, function(err, Reservation){
				res.redirect('/checkout');
				});
				}

			});
});

router.get('/reservationBooked', function(req,res){
	res.render('reservationBooked.html', {title: "Reservation"})
});

router.post('/reservationBooked', function(req, res){
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
					res.redirect('/reservationBooked');
			}
				if (!(trackReservation)){
					Reservation.createReservation(newReservation, function(err, Reservation){
				res.redirect('/checkout');
				});
				}

			});
});

router.get('/change', function(req,res){
res.render('change.html', {title: "Change Reservation"})
});


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

				res.redirect('/noReservationChange');
				}

			});
});

router.get('/changeSuccess', function(req, res){
		res.render('changeSuccess', {title: "Reservations"})
});

router.get('/noReservationChange', function(req,res){
	res.render('noReservationChange.html', {title: "Reservation"})
});

router.post('/noReservationChange', function(req, res){
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

				res.redirect('/changeSuccess');
				});
			}
				if (!(trackReservation2)){

				res.redirect('/noReservationChange');
				}

			});
});

router.get('/promo', function(req,res){
res.render('promo.html', {title: "Create PromoCode"})
});


router.get('/delete', function(req,res){
res.render('delete.html', {title: "Delete Reservation"})
});


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
				if (!(trackReservation3)){
					res.redirect('/noReservationDelete');
			}
 } });});

 router.get('/deleteSuccess', function(req, res){
 		res.render('deleteSuccess', {title: "Reservations"})
 });

 router.get('/noReservationDelete', function(req,res){
 res.render('noReservationDelete.html', {title: "Delete Reservation"})
 });

 router.post('/noReservationDelete', function(req, res){
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
 				if (!(trackReservation3)){
 				res.redirect('/noReserocavationDelete');
 			}
  } });});

router.get('/checkout', function(req,res){
res.render('checkout.html', {title: "Checkout"})
});

router.get('/viewReservations', function(req, res){
	Reservation.find({}, function(err, reservations){
		res.render('viewReservations', {reservations})
	});
});


router.get('*', function(req,res){
	res.sendfile('./public/views/reservation.html');
});

module.exports = router;
