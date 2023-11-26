
const addProperty = require('../../api/addProperty/addProperty');
const verifyToken = require('../../middlewares/verifyToken');
const getSingleProperty = require('../../api/singlePropertyGet/getSingleProperty');
const getVerifiedProperties = require("../../api/getVerifiedProperties/getVerifiedProperties");
const express = require('express');

const router = express.Router();

router.post("/property", verifyToken, addProperty);

router.get("/properties", getVerifiedProperties);

router.get("/properties/:id", getSingleProperty);

module.exports = router;