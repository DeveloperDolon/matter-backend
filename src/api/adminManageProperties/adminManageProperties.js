const checkingJWT = require("../../utils/checkingJWT");
const propertyModel = require("../../models/property");

const adminManageProperties = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);

        if(!isValid) {
            return res.status(401).send({ message: "Forbidden access" });
        }

        const result = await propertyModel.find({}, "property_title property_location agent_name agent_email price_range verified")
        res.send(result);

    } catch (err) {
        next(err);
    }
}

module.exports = adminManageProperties;