const checkingJWT = require("../../utils/checkingJWT");
const WishlistModel = require("../../models/wishlistModel");


const deleteWishlist = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);

        if(!isValid) {
            return res.status(401).send({ message: "Forbidden access."});
        }
        const id = req.params.id;
        
        const result = await WishlistModel.findOneAndDelete(id);

        res.send(result);

    } catch (err) {
        next(err);
    }
}

module.exports = deleteWishlist;