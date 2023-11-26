const checkingJWT = require("../../utils/checkingJWT");
const propertyReviewModel = require("../../models/propertyReviewModel");

const addPropertyReview = async (req, res, next) => {
    try {

        const isValid = checkingJWT(req.user.user, req.query.email);
        console.log(isValid)
        if(!isValid) {
            console.log("from there");
            return res.status(401).send({message: 'Forbidden access'});
        }

        const reviewData = req.body;
        
        const result = await propertyReviewModel.insertMany(reviewData);
        
        res.send(result);

    } catch (err) {
        next(err);
    }
}

module.exports = addPropertyReview;