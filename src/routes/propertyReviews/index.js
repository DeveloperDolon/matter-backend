const verifyToken = require("../../middlewares/verifyToken");
const express = require("express");
const getPropertyReviews = require("../../api/getPropertyReviews/getPropertyReviews");
const addPropertyReview = require("../../api/addPropertyReview/addPropertyReview");
const getUserReviews = require("../../api/getUserReviews/getUserReviews");
const deleteReview = require("../../api/deleteReview/deleteReview");
const router = express.Router();

router.get("/property-reviews/:id", verifyToken, getPropertyReviews);

router.post("/property-review", verifyToken, addPropertyReview);

router.get("/user-reviews", verifyToken, getUserReviews);

router.delete("/user-reviews/:id", verifyToken, deleteReview);

module.exports = router;