var mongoose = require('mongoose');

var serviceSchema = mongoose.Schema({

    category:{
      type:String,
      required:true
    },

    location:{
      type:String,
      required:true
    },

    time : { type : Date, default: Date.now }

})

var Service = mongoose.model("service", serviceSchema);

module.exports = Service;
