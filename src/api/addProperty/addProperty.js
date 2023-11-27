const propertyModel = require('../../models/property');
const checkingJWT = require('../../utils/checkingJWT');

const addProperty = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req?.user?.user, req.query.email);

        if(!isValid) {
            return res.status(401).send({message: "Forbidden access!"});
        }

        const propertyData = req.body;

        const result = await propertyModel.insertMany(propertyData);

        res.send(result);

    } catch(err) {
        next(err);
    }
}

module.exports = addProperty;