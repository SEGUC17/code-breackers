var mongoose = require('mongoose');
var serviceSchema = mongoose.Schema({
    serviceName:{
        type:String,
        required:true,
        unique:true
    },
	
    description : {
    type: String,
    required:true
    },

    address:{
      type: String,
      required: true
    },

    price:{
      type:Number,
      required: true
    },

    location:{
      type: String,
      required: true
    },

    category:{
        type: String,
        required: true
      },

   img:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'imageS'
    },
	
   rating:{
   type: Number,
   value:0
 },
	
   workingdays : {
   type:String,
   required: true
 },
	
  beginWorkingHours :{
  type:Number,
  required: true
},
	
  endWorkingHours :{
  type:Number,
  required: true
},
	
  offerDescription:{
  type: String
},
	
  currentOffers: {type: Boolean, default: false},
	
  time : { type : Date, default: Date.now },
  
  review :[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Review'
  }];

});

});

var Service = mongoose.model("service", serviceSchema);

module.exports = Service;
