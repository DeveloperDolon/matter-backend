const express = require('express');
const addUserInfo = require('../../api/addUserInformation/addUserInfo');
const getUser = require('../../api/getUser/getUser');
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifyToken = require("../../middlewares/verifyToken");
const getAllUsers = require("../../api/getUser/getAllUsers");

const router = express.Router();

router.post("/users", addUserInfo);

router.get("/user", verifyToken, getUser);

router.get("/all-users", verifyToken, verifyAdmin, getAllUsers);


module.exports = router;