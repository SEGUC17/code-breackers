var stripe= require('stripe')('sk_test_IHpYlc4fvoVyRJzbkFHgMAax');

//Payment controller = create Payment
let paymentController = {

  console.log('hi');
    checkout: function(req, res) {
      var Token = req.body.stripeToken;
      var chargeAmount = "900";
      var charge = stripe.charges.create({
          amount:chargeAmount,
          currency:"usd",
          source: Token
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
