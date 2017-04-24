var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	local: {
		email: String,
		password: String,
		username : String,
		birthday: Date,
		points: {Number,
		value: 0}

	}

});

module.exports = mongoose.model('User', userSchema);
