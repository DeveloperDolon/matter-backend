const checkingJWT = require("../../utils/checkingJWT");
const propertyReviewModel = require("../../models/propertyReviewModel");

const getPropertyReviews = async (req, res, next) => {
    try {
        console.log("hello world!");
        const isValid = await checkingJWT(req.user.user, req.query.email);
        if(!isValid) {
            return res.status(401).send({message: 'Forbidden access.'});
        }

        const id = req.params.id;
        console.log(id);
        const query = {property_id: id};

        const result = await propertyReviewModel.find(query);

        res.send(result);

    } catch (err) {
        next(err);
    }
}

module.exports = getPropertyReviews;