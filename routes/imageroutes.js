var express = require ('express');
var router = express.Router();
var multer = require ('multer');
var serviceControllerController = require('./controllers/servicecontroller');
var upload = multer ({ dest:'public/uploads'})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('images', { title: 'Express' });
});

router.post('/', upload.any(),function(req, res, next) {
  res.send(req.files);
});

/*app.post(‘/api/photo’,function(req,res){
 var newimage = new image();
 newimage.img.data = fs.readFileSync(req.files.userPhoto.path)
 newimage.img.contentType = ‘image/png’;
 newimage.save();
});*/

module.exports = router;

/*var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'views/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })*/

//exports.clearFlights = function(cb){
   // DB.collection('flights').removeMany(function(){console.log('Successfully cleared Flights');
//cb();
  //});
//};

//  app.get('/db/delete', function(req, res) {

        //db.clearFlights(function() {
           // db.clearBookings(function() {
              //  db.clearAirports(function() {
                 //   db.clearAircrafts(function() {
                  //      res.send('Database Cleared');
                  //  });
              //  });
