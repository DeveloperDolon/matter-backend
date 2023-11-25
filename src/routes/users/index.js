const express = require('express');
const addUserInfo = require('../../api/addUserInformation/addUserInfo');
const router = express.Router();

router.post("/users", addUserInfo);


module.exports = router;