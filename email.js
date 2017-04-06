var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "kareemabdelaziz771996@gmail.com",
        pass: "killer8kman"
    }
});

// setup e-mail data with unicode symbols
/*var mailOptions = {
    from: "shahid@reach1to1.com", // sender address
    to: "kareemabdelaziz771996@gmail.com", // list of receivers
    subject: "Hello", // Subject line
    text: "Hello world ", // plaintext body
    html: "<b>Hello world </b>" // html body
}*/

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }
