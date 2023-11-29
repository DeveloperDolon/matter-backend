
const propertyModel = require("../../models/property");

const getAdvertiseProperties = async (req, res, next) => {
    try {

        const query = {advertised: true};

        const result = await propertyModel.find(query);

        res.send(result);

    } catch (err) {
        next(err);
    }
}

module.exports = getAdvertiseProperties;