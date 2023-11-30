const propertyReviewModel = require("../../models/propertyReviewModel");

const latestUserReviews = async (req, res, next) => {
    try {

        const result = await propertyReviewModel.find({}, "property_title reviewer_name reviewer_image review_description review_star");

        res.send(result.slice(0, 4));

    } catch (err) {
        next(err);
    }
}

module.exports = latestUserReviews;