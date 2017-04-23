var nodemailer = require("nodemailer");


let emailController = {

  inviteFriend: function(req,res){

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
  res.render('inviteFriend.html');
},

  sendEmail: function(req,res){
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
}
}


module.exports= emailController;
