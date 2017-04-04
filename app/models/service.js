var mongoose = require('mongoose');
//require('./category');
var serviceSchema = mongoose.Schema({
    servicename:{
        type:String,
        required:true,
        unique:true
    },

    URL:String, //video's link

    description : {
    type: String,
    required:true
    },

    location:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'locationSchema'
    },

    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categorySchema'
      },

   img:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'imageS'
    },

    time : { type : Date, default: Date.now }



});

var Service = mongoose.model("service", serviceSchema);

module.exports = Service;
