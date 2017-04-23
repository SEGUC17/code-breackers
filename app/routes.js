var express = require('express');
var router = express.Router();
//var emailController = require('./controllers/emailController');



var nodemailer = require("nodemailer");



/*var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'kareemabdelaziz771996@gmail.com',
        pass: 'killer8kman'
    },
    tls: {rejectUnauthorized: false},
    debug:true
});
*/



//module.exports = emailController;




/*router.get('/',function(req,res){
	res.sendfile('views/index.html');
});

router.get('/send',function(req,res){
	var mailOptions={
		to : req.query.to,
		subject : req.query.subject,
		text : req.query.text
	}
	console.log(mailOptions);
	smtpTransport.sendMail(mailOptions, function(error, response){
   	 if(error){
        	console.log(error);
		res.end("error");
	 }else{
        	console.log("Message sent: " + response.message);
		res.end("sent");
    	 }
});
});
*/


router.post('/rate', function(req, res){
  var serviceName = req.body.rating;
	var rating = req.body.rating;

console.log(serviceName);

service.findOne({serviceName:req.body.serviceName},function(err,service2){

				var currRating = service2.rating;
        var avg = currRating+rating/2;
        service2.rating = avg;

				service.changeRating(service2, function(err, service){

				if(err) throw err;
				console.log(service2);

				});

				if (!(service)){

				console.log("not a rating");
				}


			});
      });
module.exports = router;
