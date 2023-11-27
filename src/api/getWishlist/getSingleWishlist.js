const checkingJWT = require("../../utils/checkingJWT");
const wishlistModel = require("../../models/wishlistModel");

const getSingleWishlist = async (req, res, next) => {
    try {
        
        const isValid = checkingJWT(req.user.user, req.query.email);
        if (!isValid) {
            return res.status(401).send({ message: "Forbidden access."});
        }


        const id = req.params.id;
        
        const wishlistData = await wishlistModel.findById(id);

        res.send(wishlistData);

    } catch (err) {
        next(err);
    }
}

module.exports = getSingleWishlist;