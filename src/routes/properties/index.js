
const addProperty = require('../../api/addProperty/addProperty');
const verifyToken = require('../../middlewares/verifyToken');
const getSingleProperty = require('../../api/singlePropertyGet/getSingleProperty');
const verifyAdmin = require('../../middlewares/verifyAdmin');
const getVerifiedProperties = require("../../api/getVerifiedProperties/getVerifiedProperties");
const getAgentProperty = require("../../api/getAgentProperty/getAgentProperty");
const deleteAgentProperty = require("../../api/deleteAgentProperty/deleteAgentProperty");
const updateProperty = require("../../api/updateProperty/updateProperty");
const getSoldProperties = require("../../api/getSoldProperties/getSoldProperties");
const getRequestedProperties = require("../../api/getRequestedProperties/getRequestedProperties");
const setRequestedPropertiesStatus = require("../../api/setRequestedPropertiesStatus/setRequestedPropertiesStatus");
const adminManageProperties = require("../../api/adminManageProperties/adminManageProperties");
const adminSetPropertyStatus = require("../../api/adminSetPropertyStatus/adminSetPropertyStatus");
const setAdvertisedProperty = require("../../api/setAdvertisedProperty/setAdvertisedProperty")
const getAdvertiseProperties = require("../../api/getAdvertiseProperties/getAdvertiseProperties");
const express = require('express');
const verifyAgent = require('../../middlewares/verifyAgent');

const router = express.Router();

router.post("/property", verifyToken, verifyAgent, addProperty);

router.get("/advertised-properties", getAdvertiseProperties);

router.get("/properties", getVerifiedProperties);

router.get("/properties/:id", getSingleProperty);

router.get("/agent-properties", verifyToken, verifyAgent, getAgentProperty);

router.delete("/agent-properties/:id", verifyToken, verifyAgent, deleteAgentProperty);

router.patch("/agent-properties/:id", verifyToken, verifyAgent, updateProperty);

router.get("/agent-sold-properties", verifyToken, verifyAgent, getSoldProperties);

router.get("/agents-requested-properties", verifyToken, verifyAgent, getRequestedProperties);

router.patch("/agents-requested-properties/:id", verifyToken, verifyAgent, setRequestedPropertiesStatus);

router.get("/admin-manage-properties", verifyToken, verifyAdmin, adminManageProperties);

router.patch("/admin-set-properties-status/:id", verifyToken, verifyAdmin, adminSetPropertyStatus);

router.patch("/admin-advertise-property/:id", verifyToken, verifyAdmin, setAdvertisedProperty);




module.exports = router;