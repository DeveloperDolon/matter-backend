const strinpPaymentIntent = require("../../api/userPayment/strinpPaymentIntent");
const addUserPaymentData = require("../../api/userPayment/addUserPaymentData");

const verifyToken = require("../../middlewares/verifyToken");
const express = require("express");
const router = express.Router();


router.post("/create-payment-intent", verifyToken, strinpPaymentIntent);

router.post("/user-payment/:id", verifyToken, addUserPaymentData);

module.exports = router;