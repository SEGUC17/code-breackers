
var mongoose = require('mongoose');

var serviceProviderSchema = mongoose.Schema({

	local: {
		email: String,
		password: String,
		username : String,
		serviceId: String,
		complaints : [{
			type: mongoose.Schema.Types.ObjectId,
			ref : 'complaint'
		}]



	}
});

module.exports = mongoose.model('ServiceProvider', serviceProviderSchema);
