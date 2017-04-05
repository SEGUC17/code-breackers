var mongoose = require ('mongoose');
var rateSchema = mongoose.Schema({

  type:Number
})

var RSchema= serviceSchema.find(servicename).populate('ratings._item').exec(function(err, user){
if(err || !user)
return next(new Error('Service username not found !!!!'));

console.log(user.rating);

});
var Rate = mongoose.model("rate", rateSchema);
module.export = Rate;
