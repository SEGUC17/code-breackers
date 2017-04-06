// require dependincies
var express = require('express');
var router = express.Router();
var serviceController = require('./controllers/servicecontroller');
var multer = require ('multer');
var upload = multer ({ dest:'public/uploads'})

/*let services = require('../models/service');
let location = require('../models/location');
let category = require('../models/category');*/


 router.get('/', function(req, res){
   console.log("addservice");
   res.render('addservice');
});

router.post('/AS',serviceController.createService);

router.post('/myservice',function(req, res, next) {
  res.redirect('betngan');
});

router.get('/betngan',serviceController.getMyService);


   router.get('/images', function(req, res, next) {
     res.render('images', { title: 'Express' });
   });

   router.post('/images', upload.any(),function(req, res, next) {
     res.send(req.files);
   });

 router.get('/addservice', function(req, res){
   res.render('addservice');
   console.log("addservice");
 });

 // router.get('/myproject', projectController.getMyProject , function (req , res){
 //    console.log("listenn");
 //  });
 router.get('/viewservice', serviceController.getAllServices, function (req , res){
   console.log("haygeb el service");
 });

// UPDATE SERVICE ROUTES
//PUT to update a service by ID
	router.put('/updateservice',function(req, res) {
	    // Get our REST or form values. These rely on the "name" attributes
	    var serviceName = req.body.serviceName;
	    var description = req.body.description;
	    var address = req.body.address;
	    var price = req.body.price;
      var location = req.body.location;
      var category = req.body.category;
      var workingdays = req.body.workingdays;
      var offer = req.body.offer;

	    //find the servcie by ID
	    mongoose.model('service').findById(req.id, function (err, services) {
	        //update it
	        service.update({
	            serviceName : serviceName,
	            description : description,
	            address : address,
	            price : price,
              location : location,
              category : category

	        }, function (err, serviceID) {
	          if (err) {
	              res.send("There was a problem updating the information to the database: " + err);
	          }
	          else {
	                  //HTML responds by going back to the page or you can be fancy and create a new view that shows a success page.
	                  res.format({
	                      html: function(){
	                           res.redirect("/serviceview/" + service._id);
	                     },
	                     //JSON responds showing the updated values
	                    json: function(){
	                           res.json(service);
	                     }
	                  });
	           }
	        })
	    });
	});
  //DELETE a Service by ID
router.delete('/:id/edit', function (req, res){
    //find a Service by ID
    mongoose.model('service').findById(req.id, function (err, service) {
        if (err) {
            return console.error(err);
        } else {
            //remove it from Mongo
            service.remove(function (err, service) {
                if (err) {
                    return console.error(err);
                } else {
                    //Returning success messages saying it was deleted
                    console.log('DELETE removing ID: ' + service._id);
                    res.format({
                        //HTML returns us back to the main or success page
                          html: function(){
                               res.redirect("/serviceView");
                         },
                         //JSON returns the item with the message that is has been deleted
                        json: function(){
                               res.json({message : 'deleted',
                                   item : service
                               });
                         }
                      });
                }
            });
        }
    });
});
module.exports = router;



/*
router.post(function(req, res) {
    // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
    var servicename = req.body.servicename;
    var category = req.body.category;
    var location= req.body.location;
    var price = req.body.price;
    var address = req.body.address;
    var description = req.body.description;
    //call the create function for our database
    mongoose.model('service').create({
        servicename : servicename,
        category: category,
        location : location,
        price : price,
        address : address,
        description : description

    }, function (err, services) {
          if (err) {
              res.send("There was a problem adding the information to the database.");
          } else {
              //Blob has been created
              console.log('POST creating new services: ' + services);
              res.format({
                  //HTML response will set the location and redirect back to the home page. You could also create a 'success' page if that's your thing
                html: function(){
                    // If it worked, set the header so the address bar doesn't still say /adduser

                    // And forward to success page
                    res.redirect("/images");
                },
                //JSON response will show the newly created blob
                json: function(){
                    res.json(services);
                }
            });
          }
    })
});
*/
