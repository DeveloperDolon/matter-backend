const verifyToken = require("../../middlewares/verifyToken");
const addWishlist = require("../../api/addWishlist/addWishlist");
const express = require('express');
const router = express.Router();

router.post("/users-wishlist", verifyToken, addWishlist);

module.exports = router;