const verifyToken = require("../../middlewares/verifyToken");
const addWishlist = require("../../api/addWishlist/addWishlist");
const getWishlist = require("../../api/getWishlist/getWishlist");
const express = require('express');
const router = express.Router();

router.post("/users-wishlist", verifyToken, addWishlist);

router.get("/users-wishlist", verifyToken, getWishlist);

module.exports = router;