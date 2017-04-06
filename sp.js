var mongoose = require('mongoose');

var spSchema = mongoose.Schema({
	local: {
		email: String,
		password: String,
		username : String,
		service: {type: mongoose.Schema.Types.ObjectId, ref: 'Service'},
		complaints : [{
			type: mongoose.Schema.Types.ObjectId,
			ref : 'complaint'
		}]



	}
});

module.exports = mongoose.model('sp', spSchema);
