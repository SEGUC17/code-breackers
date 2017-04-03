// require dependincies
var express = require('express');
var router = express.Router();
var serviceControllerController = require('./controllers/servicecontroller');
var multer = require ('multer');
var upload = multer ({ dest:'public/uploads'})


 router.get('/', function(req, res){
   console.log("addservice");
   res.render('addservice');
   console.log("addservice");
});
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

// UPDATE SERVICE ROUTES
//PUT to update a blob by ID
	router.put(function(req, res) {
	    // Get our REST or form values. These rely on the "name" attributes
	    var servicename = req.body.servicename;
	    var description = req.body.description;
	    var address = req.body.address;
	    var price = req.body.price;
      var location = req.body.location;
      var category = req.body.category;

	    //find the document by ID
	    mongoose.model('service').findById(req.id, function (err, service) {
	        //update it
	        service.update({
	            servicename : servicename,
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
	})
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
