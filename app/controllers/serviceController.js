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
            res.redirect('/');
        }
    })
  },

      getServiceByCategory:function(req, res){

        var Category = req.body.selectpicker;
        console.log(Category.name);


          Service.find({category: Category}, function(err, services) {

              if(err)
                  res.send(err.message);
              else
                res.render('FilteredServices.ejs', {services});

      })

    },



      getServiceByLocation: function(req,res){

        var locationn = req.body.selectpicker;
        console.log(locationn.name);
        Service.find({location: locationn}, function(err, services){

        if (err)
         res.send(err.message)

        else
         res.render('FilteredServices.ejs', {services});

         console.log(services);

      })
    },

    getServiceByDate: function(req,res){

      Service.find(function(err, services){
        services.sort(function(a, b) {
      a = new Date(a.dateModified);
      b = new Date(b.dateModified);
      return a>b ? -1 : a<b ? 1 : 0;
        });
        console.log(services);

      if (err)
       res.send(err.message)

      else
       res.render('FilteredServices.ejs', {services});

    })},

    getServiceByOffer : function(req,res){

     Service.find({currentOffers: true}, function(err, services){

     if (err)
      res.send(err.message)

     else
      res.render('FilteredServices.ejs', {services});

   })},

   getServiceByRating: function(req,res){

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
      res.render('FilteredServices.ejs', {services});

   })}

,

getServiceByKeyword: function (req,res)
{
  if(req.query.search) {
		const regex = new RegExp(escapeRegex(req.query.search), 'gi');
		Service.find({"serviceName": regex}, function(err, services) {
			if(err) {
				res.send(err.message);
			} if(services.length < 1) {
				res.render('FilteredServices.ejs', {services});  ///plugs in some flags g is global and i is ignore upper case
			} else {
				res.render('FilteredServices.ejs', {services});
			}
		});


}},


}

function escapeRegex(text) {
return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"); }

module.exports = serviceController;
