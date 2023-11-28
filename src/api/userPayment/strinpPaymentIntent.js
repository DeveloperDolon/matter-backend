const checkingJWT = require("../../utils/checkingJWT");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const stripPaymentIntent = async (req, res, next) => {
    try {
        const isValid = checkingJWT(req.user.user, req.query.email);
        if(isValid) {
            return res.status(401).send({message: "Forbidden access"});
        }

        const { price } = req.body;
        
        const amount = parseInt(price * 100);
      // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
          amount: amount,
          currency: "inr",
          payment_method_types: ['card'],
        });
    
        res.send({
          clientSecret: paymentIntent.client_secret,
        });

    } catch (err) {
        next(err);
    }
}

module.exports = stripPaymentIntent;