let Service = require('../models/service');
var $  = require('jquery');
var jsdom = require("jsdom").jsdom;
var doc = jsdom();
var window = doc.defaultView;
$ = require('jquery')(window);


//
// function getB(){
//
//   var Category = document.getElementById("Category1").innerText;
//   //var Category = $('#Category1').text();
//   console.log(Category +  "kdiejiehfuhefbehbfhebfhjebhjfbejhbfejhbfjebfehu");
//   res.render('home.ejs');
//
//
// };




let serviceController = {

      getServiceByCategory:function(req, res){

          //var Category = document.getElementById('Category').innerText;
          //var Category = document.getElementById("Category").innerText;
          //console.log(Category +  "kdiejiehfuhefbehbfhebfhjebhjfbejhbfejhbfjebfehu");

            //var Category = document.getElementById("Category1").innerText;
            //console.log(Category +  "kdiejiehfuhefbehbfhebfhjebhjfbejhbfejhbfjebfehu");

          Service.find({category: 'Category1'}, function(err, services) {
              console.log(services + "llllllllllllllllllllllllll");
              if(err)
                  res.send(err.message);
              else
                res.render('index1.ejs', {services});


      })

    },


  getServiceByCategoryy:function(req, res){

      var Category = $( "#myselect" ).val();
      console.log(Category);

      Service.find({category: Category}, function(err, services) {

          if(err)
              res.send(err.message);
          else
            res.render('index2.ejs', services);

            console.log(services + "llllllllllllllllllllllllll");

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
                console.log(service);
                res.redirect('/');
            }
        })
      },


      getServiceByLocation: function(req,res){

        Service.find({location: 'Location1'}, function(err, services){

        if (err)
         res.send(err.message)

        else
         res.render('index1.ejs', {services});

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
       res.render('index1.ejs', {services});

    })},

    getServiceByOffer : function(req,res){

     Service.find({currentOffers: true}, function(err, services){

     if (err)
      res.send(err.message)

     else
      res.render('index1.ejs', {services});

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
      res.render('index1.ejs', {services});

   })}

}

module.exports = serviceController;
