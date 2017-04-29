let Review = require('../models/review.js');


let ReviewController  = {
  createReview: function(req, res){

    let review = new Review(req.body);

    review.save(function(err, complaint){
        if(err){
            res.send(err.message)
            console.log(err);
        }
        else{
            console.log(review);
            res.redirect('/');
        }
    })
  },


}

module.exports = ReviewController;
