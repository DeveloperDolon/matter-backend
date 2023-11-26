
const propertyModel = require('../../models/property');

const getSingleProperty = async ( req, res, next) => {
    try {

        const id = req.params.id;

        const result = await propertyModel.findById(id);


        res.send(result);

    } catch(err) {
        next(err);
    }
}

module.exports = getSingleProperty;