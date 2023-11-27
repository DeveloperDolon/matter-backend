
const addProperty = require('../../api/addProperty/addProperty');
const verifyToken = require('../../middlewares/verifyToken');
const getSingleProperty = require('../../api/singlePropertyGet/getSingleProperty');
const getVerifiedProperties = require("../../api/getVerifiedProperties/getVerifiedProperties");
const getAgentProperty = require("../../api/getAgentProperty/getAgentProperty");
const deleteAgentProperty = require("../../api/deleteAgentProperty/deleteAgentProperty");
const express = require('express');
const verifyAgent = require('../../middlewares/verifyAgent');

const router = express.Router();

router.post("/property", verifyToken, addProperty);

router.get("/properties", getVerifiedProperties);

router.get("/properties/:id", getSingleProperty);

router.get("/agent-properties", verifyToken, verifyAgent, getAgentProperty);

router.delete("/agent-properties/:id", verifyToken, verifyAgent, deleteAgentProperty);

module.exports = router;