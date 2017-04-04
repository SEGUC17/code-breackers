  //nadeen service schema

var mongoose = require('mongoose');
//require('./category');
var serviceSchema = mongoose.Schema({

    servicename:{type:String, required:true, unique:true},
    URL:String, //video's link
    description : {type: String, required:true},
    location:{type: mongoose.Schema.Types.ObjectId, ref: 'locationSchema'},
    category:{type: mongoose.Schema.Types.ObjectId, ref: 'categorySchema'},
    img:{type: mongoose.Schema.Types.ObjectId, ref: 'imageS'},
    rating = [RSchema]
});
var RSchema= serviceSchema.find(servicename).populate('ratings._item').exec(function(err, user){
if(err || !user)
return next(new Error('Service username not found !!!!'));
console.log(user.rating);
});

var Service = mongoose.model("service", serviceSchema);

module.exports = Service;

//     return {
//         getAllBusinesses: function () {
//             return businessData;
//         },
//
//         getSelectedBusiness: function(serviceId) {
//             var businessList = [];
//             serviceId = parseInt(serviceId);
//             for(i=0;i<businessData.length;i++) {
//                 if(businessData[i].serviceId === serviceId) {
//                     businessList.push(businessData[i]);
//                 }
//             }
//             return businessList;
//         }
//     }
// }])
