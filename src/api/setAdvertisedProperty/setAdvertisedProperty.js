const checkingJWT = require("../../utils/checkingJWT");
const propertyModel = require("../../models/property");


const setAdvertisedProperty = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);
        if(!isValid) {
            return res.status(401).send({message: "forbidden access"});
        }
        const id = req.params.id;
        const update = {advertised: req.body.advertisement};
        const result = await propertyModel.findByIdAndUpdate(id, update);

        res.send(result);

    } catch (err) {
        next(err);
    }
}

module.exports = setAdvertisedProperty;