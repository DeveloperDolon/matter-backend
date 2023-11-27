const checkingJWT = require("../../utils/checkingJWT");
const propertyModel = require("../../models/property");


const getVerifiedProperties = async (req, res, next) => {
    try {

        const query = {verified: "verified"};

        const result = await propertyModel.find(query);

        res.send(result);

    } catch(err) {
        next(err);
    }
}

module.exports = getVerifiedProperties;