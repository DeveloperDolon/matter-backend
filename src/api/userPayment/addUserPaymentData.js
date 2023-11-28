const checkingJWT = require("../../utils/checkingJWT");
const propertyBoughtModel = require("../../models/propertyBoughtModel");
const paymentModel = require("../../models/paymentModel");


const addUserPaymentData = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);
        if(!isValid) {
            return res.status(401).send({message: "Forbidden access."});
        }

        const id = req.params.id;
        const changeStatus = await propertyBoughtModel.findByIdAndUpdate(id, {status: "sold", transactionID: req.body.transactionID});
        console.log(changeStatus);

        const payment = req.body;
        
        const paymentResult = await paymentModel.insertMany(payment);

        res.send(paymentResult);

    } catch (err) {
        next(err);
    }
}

module.exports = addUserPaymentData;