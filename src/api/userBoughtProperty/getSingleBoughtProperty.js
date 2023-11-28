const checkingJWT = require("../../utils/checkingJWT");
const propertyBoughtModel = require("../../models/propertyBoughtModel");

const getSingleBoughtProperty = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);

        if(!isValid) {
            return res.status(401).send({message: "Forbidden access!"});
        } 

        const id = req.params.id;

        const result = await propertyBoughtModel.findById(id, "offered_price");

        res.send(result);

    } catch (err) {
        next(err);
    }
}

module.exports = getSingleBoughtProperty;