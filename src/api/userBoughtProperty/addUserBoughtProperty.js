const checkingJWT = require("../../utils/checkingJWT");
const propertyBoughtModel = require("../../models/propertyBoughtModel");
const wishlistModel = require("../../models/wishlistModel");

const addUserBoughtProperty = async (req, res, next) => {
    try {
        
        const isValid = checkingJWT(req.user.user, req.query.email);

        if(!isValid) { 
            return res.status(401).send({message: "Forbidden access!"});
        }

        const propertyData = req.body;
        
        const deleteWishlist = await wishlistModel.findByIdAndDelete(propertyData?.wishlist_id);

        const result = await propertyBoughtModel.insertMany(propertyData);

        res.send({insertedData: result, removeFromWishlist: deleteWishlist});
    } catch(err) {
        next(err);
    }
}

module.exports = addUserBoughtProperty;