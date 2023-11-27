const checkingJWT = require("../../utils/checkingJWT");
const propertyReviewModel = require("../../models/propertyReviewModel");

const getUserReviews = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);
        if(!isValid) {
            return res.status(401).send({message: "Forbidden access"});
        }

        const query = {reviewer_email: req.query.email};
        const result = await propertyReviewModel.find(query);

        res.send(result);
    } catch(err) {
        next(err);
    }
}

module.exports = getUserReviews;