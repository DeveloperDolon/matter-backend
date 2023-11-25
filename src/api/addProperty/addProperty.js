const propertyModel = require('../../models/property');
const checkingJWT = require('../../utils/checkingJWT');

const addProperty = async (req, res, next) => {
    try {

        checkingJWT(req?.user?.user, req.query.email);

        const propertyData = req.body;
        propertyData.verified = false;

        const result = await propertyModel.insertMany(propertyData);

        res.send(result);

    } catch(err) {
        next(err);
    }
}

module.exports = addProperty;