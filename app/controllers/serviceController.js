let Service = require('../models/service');


let serviceController = {

	  getAllServices:function(req, res){
        
        Service.find(function(err, services){
            
            if(err)
                res.send(err.message);
            else
                res.render('index2', {services});

            console.log(services);
        })
    },

    createService: function(req, res){

        let service = new Service(req.body);

        service.save(function(err, service){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{
                
                res.redirect('/');
            }
        })
      },


      getDetails: function(req, res){
      Service.find({Service_id:req.body._id},function(err, servicex){
      
      if(err)
        res.send(err.message)
      else
        res.render('sprofile', {servicex});
    
      })
}


}


module.exports = serviceController;