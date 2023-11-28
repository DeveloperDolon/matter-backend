const checkingJWT = require("../../utils/checkingJWT");
const propertyBoughtModel = require("../../models/propertyBoughtModel");


const getSoldProperties = async (req, res, next) => {
    try {   

        const isValid = checkingJWT(req.user.user, req.query.email);

        if(!isValid) {
            return res.status(401).send({message: "Forbidden access."});
        }

        const query = {status: "sold"};

        const result = await propertyBoughtModel.find(query);

        res.send(result);

    } catch (err) {
        next(err);
    }
}

module.exports = getSoldProperties;