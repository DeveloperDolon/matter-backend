const checkingJWT = require("../../utils/checkingJWT");
const wishlistModel = require("../../models/wishlistModel");
const propertyModel = require("../../models/property");

const getSingleWishlist = async (req, res, next) => {
    try {
        
        const isValid = checkingJWT(req.user.user, req.query.email);
        if (!isValid) {
            return res.status(401).send({ message: "Forbidden access."});
        }


        const id = req.params.id;
        
        const wishlistData = await wishlistModel.findById(id);
        
        const property = await propertyModel.findById(wishlistData?.property_id);

        res.send({wishlistData: wishlistData, property: property});

    } catch (err) {
        next(err);
    }
}

module.exports = getSingleWishlist;