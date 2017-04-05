var express = require('express');
var router = express.Router();
var Reservation = require('../models/reservation');

router.get('/', function(req,res){
res.render('reserve.html', {title: "Reservation"})
});

router.post('/', function(req, res){
	var userName = req.body.userName;
	var serviceName = req.body.serviceName;
	var begin_work = req.body.begin_work;
	var end_work = req.body.end_work;
	var working_days = req.body.working_days;
	var reservation_date = req.body.reservation_date;
	var reservation_hour = req.body.reservation_hour;
        console.log(userName); 

	//req.checkBody('userName', 'Username is required').notEmpty();
	//req.checkBody('serviceName', 'ServiceName is required').notEmpty();
	//req.checkBody('begin_work', 'begin_work is required').notEmpty();
	//req.checkBody('end_work', 'end_work is required').notEmpty();
	//req.checkBody('working_days', 'working_days is required').notEmpty();
	//req.checkBody('reservation_date', 'reservation_date is required').notEmpty();


	/*var errors = req.validationErrors();

	if(errors){
		res.redirect('/');
	} else {*/
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

				//checking if a reservation is done --- omar and sarah
				// check if service is opened on that

			});
				

		

		//req.flash('success_msg', 'You are registered and can now login');

		//res.redirect('loginafter');
	//}

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

	//req.checkBody('userName', 'Username is required').notEmpty();
	//req.checkBody('serviceName', 'ServiceName is required').notEmpty();
	//req.checkBody('begin_work', 'begin_work is required').notEmpty();
	//req.checkBody('end_work', 'end_work is required').notEmpty();
	//req.checkBody('working_days', 'working_days is required').notEmpty();
	//req.checkBody('reservation_date', 'reservation_date is required').notEmpty();


	/*var errors = req.validationErrors();

	if(errors){
		res.redirect('/');
	} else {*/
		
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

				//checking if a reservation is done --- omar and sarah
				// check if service is opened on that

			});
				

		


		//req.flash('success_msg', 'You are registered and can now login');

		//res.redirect('loginafter');
	//}

});


module.exports = router;
