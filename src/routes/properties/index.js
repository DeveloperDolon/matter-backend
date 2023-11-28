
const addProperty = require('../../api/addProperty/addProperty');
const verifyToken = require('../../middlewares/verifyToken');
const getSingleProperty = require('../../api/singlePropertyGet/getSingleProperty');
const getVerifiedProperties = require("../../api/getVerifiedProperties/getVerifiedProperties");
const getAgentProperty = require("../../api/getAgentProperty/getAgentProperty");
const deleteAgentProperty = require("../../api/deleteAgentProperty/deleteAgentProperty");
const updateProperty = require("../../api/updateProperty/updateProperty");
const getSoldProperties = require("../../api/getSoldProperties/getSoldProperties");
const getRequestedProperties = require("../../api/getRequestedProperties/getRequestedProperties");
const setRequestedPropertiesStatus = require("../../api/setRequestedPropertiesStatus/setRequestedPropertiesStatus");
const express = require('express');
const verifyAgent = require('../../middlewares/verifyAgent');

const router = express.Router();

router.post("/property", verifyToken, addProperty);

router.get("/properties", getVerifiedProperties);

router.get("/properties/:id", getSingleProperty);

router.get("/agent-properties", verifyToken, verifyAgent, getAgentProperty);

router.delete("/agent-properties/:id", verifyToken, verifyAgent, deleteAgentProperty);

router.patch("/agent-properties/:id", verifyToken, verifyAgent, updateProperty);

router.get("/agent-sold-properties", verifyToken, verifyAgent, getSoldProperties);

router.get("/agents-requested-properties", verifyToken, verifyAgent, getRequestedProperties);

router.patch("/agents-requested-properties/:id", verifyToken, verifyAgent, setRequestedPropertiesStatus);


module.exports = router;