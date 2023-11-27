
const addUserBoughtProperty = require("../../api/userBoughtProperty/addUserBoughtProperty");
const verifyToken = require("../../middlewares/verifyToken");
const express = require('express');
const router = express.Router();

router.post("/user-bought-property", verifyToken, addUserBoughtProperty);

module.exports = router;