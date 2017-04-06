  //nadeen service schema

var mongoose = require('mongoose');
//require('./category');
var mongoose = require('mongoose');
//require('./category');
var serviceSchema = mongoose.Schema({
    serviceName:{
        type:String,
        required:true,
        unique:true
    },

  //  URL:String, //video's link

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
      type: mongoose.Schema.Types.ObjectId,
    //   ref: 'locationSchema'
    },

    category:{
        type: String,
      /*  ref: 'categorySchema'*/
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
offer:{
  type: String
}

});

var Service = mongoose.model("service", serviceSchema);



module.exports = Service;

module.exports.changeRating = function(changeRating, callback){
	changeReservation.save(callback);
}
