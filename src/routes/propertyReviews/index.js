const verifyToken = require("../../middlewares/verifyToken");
const express = require("express");
const getPropertyReviews = require("../../api/getPropertyReviews/getPropertyReviews");
const router = express.Router();

router.get("/property-reviews/:id", verifyToken, getPropertyReviews);

module.exports = router;