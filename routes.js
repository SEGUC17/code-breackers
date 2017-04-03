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

module.exports = router;
