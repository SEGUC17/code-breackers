//require depenciess
var express = require('express');
//var router = require('./app/routes/ratingroutes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/DBK";
var nodemailer = require("nodemailer");

var app = express();

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "kareemabdelaziz771996@gmail.com",
        pass: "killer8kman"
    },
    tls: {rejectUnauthorized: false},
    debug:true
});

app.set('view engine', 'ejs');

app.get('/',function(req,res){
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
});
});
// configure app
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/public'));

mongoose.connect(DB_URI);
//app.use(router);

// start the server
app.listen(5000, function(){
    console.log("server is listening on port 5000");
})
