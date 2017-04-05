let rating = require('../models/rate.js');


let ratingcontroller = {

    getAllnames:function(req, res){

        service.find(function(err, servicename){

            if(err)
                res.send(err.message);
            else
                res.render('ratingpage', {servicename});
        })
    },

    createrating:function(req, res){
        let rating = new rating(req.body);

        rating.save(function(err, ratings){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(rating);
                res.redirect('/');
            }
        })
    }
}

module.exports = ratingcontroller;
