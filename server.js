//require depenciess
var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/DBK";

var methodOverride = require('method-override');

var path = require('path');
var app = express();

var emailController = require('./app/controllers/emailController');

var engines= require('consolidate');
app.set('views',path.join(__dirname, '/views'));
app.set('view engine', 'html');


// configure app
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json


app.use(express.static(__dirname+ '/public'));
// app.use(router);
mongoose.connect(DB_URI);

app.get('/',emailController.inviteFriend,function(req,res){

});

//,emailController.inviteFriend,function(req,res)

/*app.get('/invite',function(req,res){
  res.render('inviteFriend.html');
)};*/

// app.get('/inviteFriend',function(req,res){
//   res.render('inviteFriend.html');
// })




app.get('/api/sendemail', emailController.sendEmail,function(req,res){

});


// start the server
app.listen(5000, function(){
    console.log("server is listening on port 5000");
});

// exports = module.exports = app; 						// expose app
/*app.get('/',function(req,res){
	res.sendfile('index.html');
});
app.get('/send',function(req,res){
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
*/
