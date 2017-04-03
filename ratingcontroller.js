let rating = require('../models/rating');

let ratingcontroller = {

    getAllnames:function(req, res){

        names.find(function(err, serviceprovidernames){

            if(err)
                res.send(err.message);
            else
                res.render('ratingpage', {servceprovidernames});
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

module.exports = projectController;
