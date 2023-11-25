
const addProperty = require('../../api/addProperty/addProperty');
const verifyToken = require('../../middlewares/verifyToken');
const getVerifiedProperties = require("../../api/getVerifiedProperties/getVerifiedProperties");
const express = require('express');

const router = express.Router();

router.post("/property", verifyToken, addProperty);
router.get("/properties", verifyToken, getVerifiedProperties);

module.exports = router;