let Service = require('../models/service');
let location = require('../models/location');
let category = require('../models/category');

let servicecontroller = {


    createService:function(req, res){
      let service = new Service(req.body);
        console.log("wasal el controller");
        service.save(function(err, services){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                res.redirect('/viewservice'); //render
                console.log("...");

            }
        })
    },
    createrating:function(req, res){
        let rating = new Rating(req.body);

        rating.save(function(err, ratings){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(rating);
                res.redirect('/viewservice');
            }
        })
},
    getAllServices:function(req, res){

            Service.find(function(err, services){

                if(err)
                    res.send(err.message);
                else
                    res.render('viewservice', {services});
            })
        },

  getMyService:function(req, res){

         Service.find({ serviceName : req.body.serviceName } , function(err, services){

             if(err)
                 res.send(err.message);
             else
                res.render('specficService', {services});
                 //console.log("plisten");
         })
     }


   }

  //POST a new blob

  module.exports = servicecontroller;
  /*  getMyServices:function(req, res){

      service.find({ username : req.body.username } , function(err, projects){

          if(err)
              res.send(err.message);
          else
             res.render('myproject', {projects});
              //console.log("plisten");
      })
  },
}



/*  getAllProjects:function(req, res){

      Project.find(function(err, projects){

          if(err)
              res.send(err.message);
          else
              res.render('visitor', {projects});
      })
  },

  getMyProject:function(req, res){

      Project.find({ username : req.body.username } , function(err, projects){

          if(err)
              res.send(err.message);
          else
             res.render('myproject', {projects});
              //console.log("plisten");
      })
  },
*/
