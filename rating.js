var mongoose = require('mongoose');

var ratingSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true,
        unique:true
    },
})

var Rating = mongoose.model("rating", ratingSchema);

module.exports = rating;
