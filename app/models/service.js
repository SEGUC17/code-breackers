var mongoose = require('mongoose');

var serviceSchema = mongoose.Schema({

  serviceName:{
      type:String,
      required:true,
      unique:true
  },

    category:{
      type:String,
      required:true
    },

    location:{
      type:String,
      required:true
    },

    time : { type : Date, default: Date.now },

    currentOffers: {type: Boolean, default: false },

    rating: {type: Number}

})

var Service = mongoose.model("service", serviceSchema);

module.exports = Service;
