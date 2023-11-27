const checkingJWT = require("../../utils/checkingJWT");
const wishlistModel = require("../../models/wishlistModel");

const getWishlist = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);

        if(!isValid) {
            return res.status(401).send({ message: "Forbidden Request."});
        }
          

        const query = {buyer_email: req.query.email};

        const wishlistData = await wishlistModel.find(query);

        res.send(wishlistData);
    } catch (err) {
        next(err);
    }
}

module.exports = getWishlist;