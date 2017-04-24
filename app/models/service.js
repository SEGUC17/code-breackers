var mongoose = require('mongoose');

var serviceSchema = mongoose.Schema({

  serviceName:{
      type:String,
      required:true,
      unique:true
  },

  description : {
  type: String,
  //required:true
  },

  address:{
    type: String,
    //required: true
  },

  price:{
    type:Number,
    //required: true
  },

  location:{
    type: String,
    //required: true
  },

  category:{
      type: String,
      //required: true
    },

 img:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'imageS'
  },

 rating:{
 type: Number,

},

 workingdays : {
 type:String,
 //required: true
},

beginWorkingHours :{
type:String,
//required: true
},

endWorkingHours :{
type:String,
//required: true
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

WebsiteURL:String,

FacebookURL: String



})

var Service = mongoose.model("service", serviceSchema);

module.exports = Service;

module.exports.DeleteService = function(deletedService, callback){
	deletedService.remove(callback);
}
module.exports.changeRating = function(changeRating,callback){
	 changeRating.save(callback);
}
