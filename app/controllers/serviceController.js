let Service = require('../models/service');


let serviceController = {

  createService: function(req, res){

    let service = new Service(req.body);

    service.save(function(err, service){
        if(err){
            res.send(err.message)
            console.log(err);
        }
        else{
            console.log(service);
            res.json(service);
        }
    })
  },

      getServiceByCategory:function(req, res){
        console.log(req.body);
        var Category = req.body.text;
        //console.log(Category.name);


        Service.find({category: Category}, function(err, services) {

              if(err)
                  res.send(err.message);
              else
                res.json(services);

      })

    },

      getServiceByLocation: function(req,res){
        console.log(req.body);
        var locationn = req.body.text;
        console.log(locationn.name);
        Service.find({location: locationn}, function(err, services){

        if (err)
           res.send(err.message)

        else
           res.json(services);

      })
    },

    getServiceByDate: function(req,res){


      console.log(req.body);
      Service.find(function(err, services){

      services.reverse();
      //   services.sort(function(a, b) {
      // a = new Date(a.dateModified);
      // b = new Date(b.dateModified);
      // return a>b ? -1 : a<b ? 1 : 0;
      //   });
      //   console.log(services);

      if (err)
       res.send(err.message)

      else
       res.json(services);

    })
  },

    getServiceByOffer : function(req,res){
    console.log(req.body);
     Service.find({currentOffers: true}, function(err, services){

     if (err)
      res.send(err.message)

     else
      res.json(services);

   })},

   getServiceByRating: function(req,res){
     console.log(req.body);


     Service.find(function(err, services){
       services.sort(function(a, b) {
     a = a.rating;
     b = b.rating;
     return a>b ? -1 : a<b ? 1 : 0;
       });
       console.log(services);

     if (err)
      res.send(err.message)

     else
      res.json(services);

   })

 },



getServiceByKeyword: function (req,res)
{
  console.log("IJNWQJDNJQWNDJQWN");
  console.log(req.body);
  if(req.body.text) {
		const regex = new RegExp(escapeRegex(req.body.text), 'gi');
		Service.find({"serviceName": regex}, function(err, services) {
			if(err) {
				res.send(err.message);
			}  else {
        console.log(services);
        res.json(services);

			}
		});


   } else {
  Service.find(function(err, services){

      if(err)
          res.send(err.message);
      else
          res.json(services);
  })

}

},

 getAllServices:function(req, res){

        Service.find(function(err, services){

            if(err)
                res.send(err.message);
            else
                res.json(services);
        })
    },

    getDetails: function(req, res){
      console.log(req.body);
      console.log("HEREEEEEEEEEEEEEE");
      Service.find({_id:req.body._id},function(err, servicex){

      if(err)
        res.send(err.message)
      else
        res.json(servicex);

      });
}




}

function escapeRegex(text) {
return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"); }

module.exports = serviceController;
