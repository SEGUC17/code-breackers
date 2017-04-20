var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewsSchema = mongoose.Schema({
	reviewName: {
		type: String
	}
});

var Review=module.exports = mongoose.model('Review', ReviewsSchema);

idservice fel request -- a3mel func getreview lelservice di--findbyID(req):review.findby()

  module.exports.createReview = function(Review, callback){
 	Review.save(callback);
 }
