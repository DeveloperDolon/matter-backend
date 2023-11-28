const strinpPaymentIntent = require("../../api/userPayment/strinpPaymentIntent");

const verifyToken = require("../../middlewares/verifyToken");
const express = require("express");
const router = express.Router();


router.post("/create-payment-intent", verifyToken, strinpPaymentIntent);

module.exports = router;