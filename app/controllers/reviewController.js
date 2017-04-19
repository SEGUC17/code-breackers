let Review = require('../models/review.js');
let review2Controller  = {
  createReview: function(req, res){
    console.console.log("req.body>>" + req.body.reviewName);
    review.findOne({reviewName : req.body.reviewName}) , function(err, reviews){
      if(err){
        res.status(500).json(err);
      }
      if(reviews){
        res.status(401).json({
          "message" : "Review already exists"
        });
      }
      else{
        var review = new review();
        review.reviewName = req.body.reviewName;
      }
    },

    function getAllReviews(){

      var deferred = Q.defer();
        db.reviews.find().toArray(function(err, reviews) {

            if(err) deferred.reject(err.name + ":"+ err.message);
            if(reviews){
              deferred.resolve(reviws);
            }else{
              deferred.resolve();
            }


    });
    return deferred.promise;

  }
