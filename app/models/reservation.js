var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

var ReservationSchema = mongoose.Schema({
	userName: {
		type: String
	},
	serviceName: {
		type: String
	},
	begin_work: {
		type: Number
	},
	end_work: {
		type: Number
	},
	working_days: {
		type : String,
	},
	reservation_date: {
		type: Date
	},
	reservation_hour: {
		type: Number
	}
});

var Reservation = module.exports = mongoose.model('Reservation', ReservationSchema);


module.exports.createReservation = function(newReservation, callback){
	newReservation.save(callback);
}

module.exports.changeReservation = function(changeReservation, callback){
	changeReservation.save(callback);
}


module.exports.deleteReservation = function(deletedReservation, callback){
	deletedReservation.remove(callback);
}

module.exports.createPromoCode = function(text, callback){
	createPromoCode.save(callback);
}


module.exports.getUserByUsername = function(userName, callback){
	var query = {userName: userName};
	Reservation.findOne(query, callback);
}



