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
 default: 0
},

 workingdays : {
 type:String,
 required: true
},

beginWorkingHours :{
type:Date,
required: true
},

endWorkingHours :{
type:Date,
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
}],

WebsiteURL:{
type: String,

}



})

var Service = mongoose.model("service", serviceSchema);

module.exports = Service;


module.exports.DeleteService = function(deletedService, callback){
	deletedService.remove(callback);
}

module.exports.changeService = function(service1,callback){
	 service1.save(callback);
   console.log("done");
}
module.exports.changeRating = function(changeRating,callback){
	 changeRating.save(callback);
}
