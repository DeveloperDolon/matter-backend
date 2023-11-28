
const addUserBoughtProperty = require("../../api/userBoughtProperty/addUserBoughtProperty");
const verifyToken = require("../../middlewares/verifyToken");
const getUserBoughtProperty = require("../../api/userBoughtProperty/getUserBoughtProperty")
const getSingleBoughtProperty = require("../../api/userBoughtProperty/getSingleBoughtProperty")
const express = require('express');
const router = express.Router();

router.post("/user-bought-property", verifyToken, addUserBoughtProperty);

router.get("/user-bought-property", verifyToken, getUserBoughtProperty);

router.get("/user-bought-property/:id", verifyToken, getSingleBoughtProperty)

module.exports = router;