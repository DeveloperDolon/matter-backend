

const {Schema, model, default: mongoose} = require("mongoose");

const PaymentSchema = new Schema({
    "email": {
        type: String,
        required: true
    },
    "price": {
        type: Number,
        required: true
    },
    "date": {
        type: Date,
        default: new Date()
    },
    "transactionID" : {
        type: String,
        required: true
    },
    "bought_property_id": {
        type: String,
        required: true
    },
    "status": {
        type: String,
        required: true
    }
});

const paymentModel = model("paymentCollection", PaymentSchema);

module.exports = paymentModel;