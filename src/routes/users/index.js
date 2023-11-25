const express = require('express');
const addUserInfo = require('../../api/addUserInformation/addUserInfo');
const getUser = require('../../api/getUser/getUser');
const verifyToken = require("../../middlewares/verifyToken");

const router = express.Router();

router.post("/users", addUserInfo);

router.get("/user", verifyToken, getUser);


module.exports = router;