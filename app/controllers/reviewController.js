let Review = require('../models/review.js');
let Service = require('../models/service');

let ReviewController  = {


  createReview: function(req, res){

    console.log("fmckjsnmfkjskf");
    console.log(req.body);

    let review = new Review(req.body);

      Service.findById("58ecece7d51ba715431fd5ad",function(err, service){
        console.log(service);
         review.serviceid = service._id;

//     console.log(review);

      review.save(function(err, review){
        if(err){
            res.send(err.message)
            console.log(err);
        }
        else{
            console.log(review);

        }
    })

 });


// Service.updateReview({service, review}, function(err){
//
// });


  },


   getAllReviews:function(req,res){
    console.log("bcwjhbcjwvj");

    Review.find({serviceid: "58ecece7d51ba715431fd5ad"}, function(err, reviews) {
    console.log(reviews);
    //review.serviceName = service.serviceName;
    if(err)
      res.send(err.message)
    else
      res.json(reviews);

    });

  }


}

module.exports = ReviewController;
