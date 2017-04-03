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
			reservation_date: reservation_date
		});

		newReservation.save(function(err)
		{
			if (err) throw err;
			console.log('New Reservation!!!!');
		});

		Reservation.createReservation(newReservation, function(err, Reservation){
			if(err) throw err;
			console.log(Reservation);
		});

		//req.flash('success_msg', 'You are registered and can now login');

		//res.redirect('loginafter');
	//}

});


module.exports = router;
