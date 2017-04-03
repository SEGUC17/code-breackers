let Service = require('../models/service');



function getB(){

  //var Category = document.getElementById("Category1").innerText;
  console.log(Category +  "kdiejiehfuhefbehbfhebfhjebhjfbejhbfejhbfjebfehu");
  res.render('home.ejs');


};

let serviceController = {

      getServiceByCategory:function(req, res){

          //var Category = document.getElementById('Category').innerText;
          //var Category = document.getElementById("Category").innerText;
          //console.log(Category +  "kdiejiehfuhefbehbfhebfhjebhjfbejhbfejhbfjebfehu");

            //var Category = document.getElementById("Category1").innerText;
            console.log(Category +  "kdiejiehfuhefbehbfhebfhjebhjfbejhbfejhbfjebfehu");



          Service.find({category: Category}, function(err, services) {

              if(err)
                  res.send(err.message);
              else
                res.render('index1.ejs', services);

                console.log(services + "llllllllllllllllllllllllll");


      })
    },

  getServiceByCategory:function(req, res){

      //var Category = document.getElementById('Category').innerText;
      console.log(Category + "dwkgfgfgfgfgfgfgfgfgfgfgfgffg");

      Service.find({category: Category}, function(err, services) {

          if(err)
              res.send(err.message);
          else
            res.render('index1.ejs', services);

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
      }



}

module.exports = serviceController;
