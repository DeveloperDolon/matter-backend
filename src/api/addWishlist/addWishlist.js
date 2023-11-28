const checkingJWT = require("../../utils/checkingJWT");
const wishlistModel = require("../../models/wishlistModel");

const addWishlist = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);

        if(!isValid) {
            console.log("from here")
            return res.status(401).send({message: "Forbidden access."});
        }

        console.log("hello wold")

        const wishlistData = req.body;
        
        const result = await wishlistModel.insertMany(wishlistData);

        res.send(result);

    } catch(err) {
        next(err);
    }
}

module.exports = addWishlist;