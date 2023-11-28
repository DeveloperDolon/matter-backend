const checkingJWT = require("../../utils/checkingJWT");
const propertyReviewModel = require("../../models/propertyReviewModel");


const getAllUserReviews = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);

        if(!isValid) {
            return res.status(401).send({message: "Forbidden access."});
        }

        const result = await propertyReviewModel.find({}, "reviewer_name reviewer_email reviewer_image review_description");

        res.send(result);

    } catch (err) {
        next(err);
    }
}

module.exports = getAllUserReviews;