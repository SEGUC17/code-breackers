let Review = require('../models/review.js');
let Service = require('../models/service');

let ReviewController  = {
  createReview: function(req, res){
    console.log("fmckjsnmfkjskf");
    console.log(req.body);

    let review = new Review(req.body);

    Service.findById("58ecece7d51ba715431fd5ad",function(err, service){
         review.serviceName = service._id;
       });
//     console.log(review);
    review.save(function(err, reviews){
        if(err){
            res.send(err.message)
            console.log(err);
        }
        else{
            console.log(review);

        }
    })
  /*  Service.find("58ecece7d51ba715431fd5ad",function(err, service){
       review.serviceName = service.serviceName;
    if(err)
      res.send(err.message)
    else
      res.json(service);

    });*/



// Service.updateReview({service, review}, function(err){
//
// });












  },
   getAllReviews:function(req,res){
    console.log(fmckjsnmfkjskf);
    console.log(req.body);
    Service.findbyId("58ecece7d51ba715431fd5ad",function(err,reviews){
    console.log(req.service.review);
    if(err)
    res.send(err.message);
    else {
      res.json(reviews);
    }
  })
}


}

module.exports = ReviewController;
