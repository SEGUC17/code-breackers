var stripe= require('stripe')('sk_test_IHpYlc4fvoVyRJzbkFHgMAax');

//Payment controller = create Payment
let paymentController = {

    checkout: function(req, res) {
      console.log(req.body);
      var Token = req.body.token;
      var chargeAmount = "2000";
      var charge = stripe.charges.create({
          amount:chargeAmount,
          currency:"usd",
          source: req.body.token
      },function(err,charge){
          if(err && err.type === "StripeCardError"){
              console.log("stripeCardError")
          }
      });
      console.log("successfully paid!");
      console.log(Token);
    }
  }

module.exports = paymentController;
