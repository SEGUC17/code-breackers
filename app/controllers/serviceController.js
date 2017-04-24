let Service = require('../models/service');
var ServiceProvider = require ('../models/serviceProvider');

let serviceController = {

  createService: function(req, res){

    let service = new Service(req.body);

    service.save(function(err, service){
        if(err){
            res.send(err.message);
            console.log(err);
        }
        else{
            console.log(service);
//            res.json(service);
        }
    })
   ServiceProvider.findById(req.serviceProvider._id, function(err, sprovider) {

    sProvider.serviceId = service._id;



  })
  },


  updateService: function(req,res){


    var serviceName = req.body.serviceName;
    var description = req.body.description;
    var address = req.body.address;
    var price = req.body.price;
    var location = req.body.location;
    var category = req.body.category;
    var workingdays = req.body.workingdays;
    var beginWorkingHours = req.body.beginWorkingHours;
    var endWorkingHours = req.body.endWorkingHours;

    //ServiceProvider.findById(req.serviceProvider._id, function(err, serviceprovider) {

//serviceprovider.serviceId
        mongoose.model('service').findById("58fca84dcd03301ffac43cff", function (err, services) {
                services.update({
                    serviceName : serviceName,
                    description : description,
                    address : address,
                    price : price,
                    location : location,
                    category : category,
                    beginWorkingHours : beginWorkingHours,
                    endWorkingHours : endWorkingHours,


                })
            });

  // })

},

deleteService: function (req, res){

  //serviceProvider.findById(req.serviceProvider._id,function(err,sprovider){
  //sProvider.serviceId
    Service.findById("58fb8196284f5f17473b6e0e",function(err,service1){
      Service.DeleteService(service1,function(err){
        if (err) {
                    return console.error(err);
                } else {
                    //Returning success messages saying it was deleted
                    console.log('DELETE removing ID: ' + service1._id);
                    res.format({
                        //HTML returns us back to the main or success page
                          html: function(){
                               res.redirect("/");
                         },
                         //JSON returns the item with the message that is has been deleted
                        json: function(){
                               res.json({message : 'deleted',
                                   item : service1
                               });
                         }
                      });
                }

      });
    });

  //});


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
