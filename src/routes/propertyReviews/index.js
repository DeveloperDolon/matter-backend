const verifyToken = require("../../middlewares/verifyToken");
const express = require("express");
const getPropertyReviews = require("../../api/getPropertyReviews/getPropertyReviews");
const addPropertyReview = require("../../api/addPropertyReview/addPropertyReview");
const router = express.Router();

router.get("/property-reviews/:id", verifyToken, getPropertyReviews);

router.post("/property-review", verifyToken, addPropertyReview);

module.exports = router;