var mongoose = require('mongoose');

var spSchema = mongoose.Schema({
	local: {
		email: String,
		password: String,
		username : String,
		number: Number,
		service: {type: mongoose.Schema.Types.ObjectId, ref: 'Service'}


	}
});

module.exports = mongoose.model('sp', spSchema);