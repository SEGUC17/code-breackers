let service = require('../models/service');

let servicecontroller = {


    createService:function(req, res){
        let service = new service(req.body);

        service.save(function(err, service){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                res.redirect('/addservice'); //render
                console.log("...");

            }
        })
    }
  }
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

module.exports = servicecontroller;

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
