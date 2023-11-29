const checkingJWT = require("../../utils/checkingJWT");
const propertyModel = require("../../models/property");


const getVerifiedProperties = async (req, res, next) => {
    try {

        const searchQuery = req?.query?.searchQuery;

        let query = {verified: "verified"};

        const regex = new RegExp(`${searchQuery}`, 'i');

        if(searchQuery) {
            query.property_title = { $regex: regex };
        }

        const sort = parseInt(req.query.sort);

        if(sort) {
            const result = await propertyModel.find(query).sort({price_range: sort});
            return res.send(result);
        }

        const result = await propertyModel.find(query);
        return res.send(result);

    } catch(err) {
        next(err);
    }
}

module.exports = getVerifiedProperties;