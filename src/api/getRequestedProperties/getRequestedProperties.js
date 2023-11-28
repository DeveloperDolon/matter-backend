const checkingJWT = require("../../utils/checkingJWT");
const propertyBoughtModel = require("../../models/propertyBoughtModel");

const getRequestedProperties = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);

        if(!isValid) {
            return res.status(401).send({message: "Forbidden access."});
        }

        const query = {agent_email: req.query.email};

        const result = await propertyBoughtModel.find(query);

        res.send(result);

    } catch (err) { 
        next(err);
    }
}

module.exports = getRequestedProperties;

