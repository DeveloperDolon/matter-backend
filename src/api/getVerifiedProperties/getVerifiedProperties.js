const checkingJWT = require("../../utils/checkingJWT");
const propertyModel = require("../../models/property");


const getVerifiedProperties = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);

        if(!isValid) {
            return res.status(403).send({message: "Forbidden access."})
        }

        const query = {verified: true};

        const result = await propertyModel.find(query);

        console.log("finding properties")

        res.send(result);

    } catch(err) {
        next(err);
    }
}

module.exports = getVerifiedProperties;