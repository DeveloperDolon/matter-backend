const verifyToken = require("../../middlewares/verifyToken");
const addWishlist = require("../../api/addWishlist/addWishlist");
const getWishlist = require("../../api/getWishlist/getWishlist");
const deleteWishlist = require("../../api/deleteWishlist/deleteWishlist");
const getSingleWishlist = require("../../api/getWishlist/getSingleWishlist");

const express = require('express');
const router = express.Router();

router.post("/users-wishlist", verifyToken, addWishlist);

router.get("/users-wishlist", verifyToken, getWishlist);

router.delete("/users-wishlist/:id", verifyToken, deleteWishlist);

router.get("/users-wishlist/:id", verifyToken, getSingleWishlist);

module.exports = router;